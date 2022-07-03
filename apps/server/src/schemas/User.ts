import { Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  // TODO: validate emails address
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
  salt: { type: String, required: true },
});
UserSchema.method('toJSON', function () {
  const user = this.toObject();
  // eslint-disable-next-line no-underscore-dangle
  delete user.__v;
  delete user.password;
  delete user.salt;
  return user;
});

export default UserSchema;
