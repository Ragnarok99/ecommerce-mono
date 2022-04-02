import mongoose from 'mongoose';
import ProductSchema from '../schemas/Product';

export default mongoose.model('Product', ProductSchema);
