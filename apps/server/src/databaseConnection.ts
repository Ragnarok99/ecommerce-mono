import { connect } from 'mongoose';

(async () => {
  const { ATLAS_MONGO_DB_URI = '' } = process.env;
  try {
    const db = await connect(ATLAS_MONGO_DB_URI);
    console.log('Connected to MongoDB', db.connection.name);
  } catch (error) {
    console.log(`error when trying to connect to mongoDB: ${error}`);
  }
})();
