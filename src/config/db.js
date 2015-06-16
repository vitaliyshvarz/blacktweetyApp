//> mongo
//> create db - use "db name"
//> show collections - show collections
//> db- object
//> db.collections - show all colections
//> db.createCollection("users") - create collection(table) with users
//> db,users.find() - get all users
//> db.users.insert({username: "supertweety", name: {first: "vitaliy", last: "chorniy"}) - insert doc in collection
//> db.users.find({username: "supertweety"})

//> db.users.find({username: "supertweety"}, {"name.first": 1}) - find user with username and return only his firtname
//= { "_id" : ObjectId("557c8aac4fc95a6265883e44"), "name" : { "first" : "vitaliy" } }

module.exports = { url : 'mongodb://localhost/test' };