rs.initiate({
  _id : "replset",
  members: [{
    _id: 0,
    host: "mongodb-primary:27017"
  }]
});
