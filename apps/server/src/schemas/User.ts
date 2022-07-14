import { Schema } from 'mongoose';

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});
// eslint-disable-next-line func-names
UserSchema.method('toJSON', function () {
  const user = this.toObject();
  // eslint-disable-next-line no-underscore-dangle
  delete user.__v;
  delete user.password;
  delete user.salt;
  return user;
});

export default UserSchema;
