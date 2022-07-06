import mongoose from 'mongoose';
import ColorSchema from '../schemas/Color';

export default mongoose.model('Color', ColorSchema);
