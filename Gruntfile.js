module.exports = function(grunt) {

	var PORT = process.env.PORT || 5000;
	var DB = grunt.file.readJSON('dbConf.json');

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('mongobackup');
	grunt.loadNpmTasks('grunt-githooks');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-karma');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concurrent: {
		  dev: {
		    tasks: ['nodemon', 'node-inspector', 'watch'],
		    options: { logConcurrentOutput: true }
		  }
		},
		jshint: {
	      files: ['Gruntfile.js',
	      		  'src/**/*.js',
	      		  'test/**/*.js',
	      		  '*.js',
	      		  '!src/public/bower_components/**/*.js',
	      		  '!src/**/*.mock.js', '!src/**/*.spec.js'],
	      options: {
	        globals: { jQuery: true }
	      }
	    },
	    watch: {
		    express: {
		      files:  ['<%= jshint.files %>'],
		      tasks:  [ 'jshint', 'express:dev' ],
		      options: { spawn: false }
		    }
		},
		nodemon: {
		  dev: {
		    script: 'app.js',
		    options: {
		      args: ['dev'],
		      nodeArgs: ['--debug'],
		      callback: function (nodemon) {
		        nodemon.on('log', function (event) {
		          console.log(event.colour);
		        });
		      },
		      env: {
		        PORT: '1337'
		      },
		      cwd: __dirname,
		      ignore: ['node_modules/**'],
		      ext: 'js,coffee',
		      watch: ['server'],
		      delay: 1000,
		      legacyWatch: true
		    }
		  },
		  exec: {
		    options: {
		      exec: 'less'
		    }
		  }
		},
		// ng-annotate tries to make the code safe for minification automatically
	    // by using the Angular long form for dependency injection.
	    ngAnnotate: {
	      prod: {
	        files: [{
	          expand: true,
	          cwd: 'build/public/admin',
	          src: '**/*.js'
	        }]
	      }
	    },
		uglify: {
		    prod: {
		      files: [{
		          expand: true,
		          src: ['build/public/admin/js/**/*.js',
		          			'!src/**/*.spec.js',
		          			'!src/**/*.mock.js'],
		      }]
		    },
		},
		copy: {
			prod: {
				files: [{
						cwd: 'src/',
						src: ['**/*', '!**/dumps/**','!**/node_modules/**', '!**/dbmodels/**'],
						dest: 'build/',
						expand: true
					}],
			}
		},
		htmlmin: {
	      prod: {
	        options: {
	          collapseWhitespace: true,
	          conservativeCollapse: true,
	          collapseBooleanAttributes: true,
	          removeCommentsFromCDATA: true,
	          removeOptionalTags: true
	        },
	        files: [{
	          expand: true,
	          cwd: 'build',
	          src: '**/*.html',
	          dest: 'build'
	        }]
	      }
	    },
		express: {
		    options: {
		      port: PORT,
		    },
		    dev: {
		      options: {
		        script: 'src/app.js'
		      }
		    },
		    prod: {
		      options: {
		        script: 'build/app.js',
		        node_env: 'production'
		      }
		    },
		    test: {
		      options: {
		        script: 'path/to/test/server.js'
		      }
		    }
		},
		open : {
		    dev : {
		      path: 'http://127.0.0.1:' + PORT,
		    }
		  },
		mongobackup: {
			dump : {
			  options: {
			    host : DB.dev.host,
			    out : './dumps/mongo',
			    db: 'test'
			  }
			},
			restore: {
			  options: {
			  	db: DB.dev.dbName,
			    host : DB.dev.host,
			    drop : true,
			    path : './dumps/mongo/test'
			  }
			},
			prod: {
				options: {
				  	db: DB.prod.dbName,
				    host : DB.prod.host,
				    drop : true,
				    path : './dumps/mongo/test'
				  }
			}
		},
		githooks: {
	    all: {
	      'pre-commit': 'jshint mongobackup:dump',
	      'post-merge': {
	        taskNames: 'bower:install mongobackup:restore'
	      }
	    }
	  },
		karma: {
		  unit: {
		    options: {
		      frameworks: ['jasmine'],
		      singleRun: true,
		      browsers: ['Chrome'],
		      files: [
		      	'src/public/bower_components/angular/angular.js',
		      	'src/public/bower_components/angular-mocks/angular-mocks.js',
		      	'src/public/bower_components/angular-resource/angular-resource.js',
		      	'src/public/bower_components/angular-route/angular-route.js',
		      	'src/public/bower_components/angular-animate/angular-animate.js',
		      	'src/public/bower_components/angular-route-segment/build/angular-route-segment.js',
		      	'src/public/bower_components/ngDialog/js/ngDialog.js',
		      	'src/public/bower_components/angular-translate/angular-translate.js',
		      	'src/public/bower_components/ng-file-upload/ng-file-upload.min.js',
		      	'src/public/admin/js/**/*.js',
		      	'src/public/admin/js/app.js', //testing admin
		        'src/**/*.mock.js', 'src/**/*.spec.js'
		      ],
		      colors: true,
		      port: 9090,
		      reporters: ['progress']
		    }
		  }
		}
	});

  grunt.registerTask('start', [ 'express:dev', 'open:dev', 'watch' ]);
  grunt.registerTask('dbdump', [ 'mongobackup:dump']);
  grunt.registerTask('dbrestore', ['mongobackup:restore' ]);


  grunt.registerTask('build', [
  	'mongobackup:prod',
  	'copy:prod',
  	'ngAnnotate:prod',
  	'uglify:prod',
  	'htmlmin:prod',
  	'express:prod',
  	'watch'
  ]);

	grunt.registerTask('test', [
	  'jshint',
	  'karma:unit'
	]);
};