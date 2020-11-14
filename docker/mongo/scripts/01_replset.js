rs.initiate({
  _id : "replset",
  members: [{
    _id: 0,
    host: "mongodb-primary:27017"
  }, {
    _id: 1, 
    host: "mongodb-secondary-01:27018"
  },
  {
    _id: 2,
    host: "mongodb-secondary-02:27019",
    arbiterOnly: true
  }]
});
