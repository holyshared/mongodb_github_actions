import mongoose from 'mongoose';
import { User } from './';

before(async () => {
  const url = process.env.MONGO_URL || 'mongodb://localhost:27017/test?replicaSet=replset'; // XXX need db name?
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
