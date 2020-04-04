import mongoose from 'mongoose';

async function dbConnect () {
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return db;
}

export default dbConnect;