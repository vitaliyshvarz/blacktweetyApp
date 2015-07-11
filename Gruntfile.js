module.exports = function(grunt) {

	var PORT = process.env.PORT || 3000;
	console.log(process.env);
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
	      		  '!src/public/bower_components/**/*.js'],
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
		          src: ['build/public/admin/js/**/*.js'],
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
			    host : 'localhost',
			    out : './dumps/mongo',
			    db: 'test'
			  }
			},
			restore: {
			  options: {
			  	db: 'test',
			    host : 'localhost',
			    drop : true,
			    path : './dumps/mongo/test'
			  }
			},
			prod: {
				options: {
				  	db: 'heroku_375q6vw3',
				    host : 'heroku:heroku@ds033760.mongolab.com:33760',
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
	  }
	});



  // Default task(s).
  // grunt.registerTask('build', ['express:prod', 'watch']);
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


};