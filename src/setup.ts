import mongoose from 'mongoose';
import { User } from './';

before(async () => {
  const url = process.env.MONGO_URL || 'mongodb://example:example@localhost:27017/example?replicaSet=replset';
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  await User.createCollection();
});

after(() => {
  mongoose.disconnect();
});
