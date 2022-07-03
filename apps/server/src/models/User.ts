import mongoose from 'mongoose';
import UserSchema from '../schemas/User';

export default mongoose.model('User', UserSchema);
