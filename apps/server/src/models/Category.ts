import mongoose from 'mongoose';
import CategorySchema from '../schemas/Category';

export default mongoose.model('Category', CategorySchema);
