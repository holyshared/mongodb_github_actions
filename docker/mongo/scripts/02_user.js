var newUsers = [{
  user: 'example',
  pwd: 'example',
  roles: [{
    role: 'root',
    db: 'admin'
  }, {
    role: 'dbOwner',
    db: 'example'
  }]
}];

var exampleDb = db.getSiblingDB('example');
var currentUsers = exampleDb.getUsers();
if (currentUsers.length === newUsers.length) {
  quit();
}
exampleDb.dropAllUsers();

for (var i = 0, length = newUsers.length; i < length; ++i) {
  exampleDb.createUser(newUsers[i]);
}
