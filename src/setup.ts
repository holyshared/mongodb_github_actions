import mongoose from 'mongoose';

before(async () => {
  const url = process.env.MONGO_URL || 'mongodb://example:example@localhost:27017/example?replicaSet=replset';
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
});

after(() => {
  mongoose.disconnect();
});
