import { connect } from 'mongoose';

(async () => {
  // TODO: pull this out from env vars
  const DB_URI =
    'mongodb+srv://admin:SAr15UO0moO5mLLp@cluster0.r3gmj.mongodb.net/ecommerce?retryWrites=true&w=majority';

  try {
    const db = await connect(DB_URI);
    console.log('Connected to MongoDB', db.connection.name);
  } catch (error) {
    console.log(`error when trying to connect to mongoDB: ${error}`);
  }
})();
