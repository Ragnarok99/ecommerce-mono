import { Schema } from 'mongoose';

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

export default CategorySchema;
