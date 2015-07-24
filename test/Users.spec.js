
var should      = require('should'),
    db          = require('../src/config/db.js'),
    models      = require('../dbmodels/Users.js'),
    Users       = models.Users,
    dbURI       = 'mongodb://localhost/test';
// DB
var mongo = require('mocha-mongo')('mongodb://localhost/test');
var ready = mongo.ready(); //only need to create this once


describe('db', function () {

    before(function () {
        //do smth
    });

    it('should have Users', function () {
        models.should.be.have.property('Users');
    });

    describe('Users', function () {

        it('should be have #find method', function () {
            Users.should.be.have.property('find');
            Users.find.should.be.type('function');
        });

        it('should be have #findById method', function () {
            Users.should.be.have.property('findById');
            Users.findById.should.be.type('function');
        });

        it('should be have #speak method', function () {
            Users.prototype.should.be.have.property('speak');
            Users.prototype.speak.should.be.type('function');
        });

        it('should be have #save method', function () {
            Users.prototype.should.be.have.property('save');
            Users.prototype.save.should.be.type('function');
        });

        it('should be have #toJSON method', function () {
            Users.prototype.should.be.have.property('toJSON');
            Users.prototype.toJSON.should.be.type('function');
        });

        describe('#find', function () {
            var users;
            beforeEach(function() {

            });

            it('should return number of users', ready(function(db, done) {
                db.collection('users').count(function(err, count) {
                    users = count;
                    done();
                });

            }));

            it('should add user', ready(function(db, done) {
                db.collection('users').insert({name: 'test', email: 'test@mail.com'}, done);
            }));

            it('should add user', ready(function(db, done) {
                db.collection('users').find().count(function(err, count) {
                    count.should.be.exactly(++users);
                    done();
                });
            }));

        });

    });

});