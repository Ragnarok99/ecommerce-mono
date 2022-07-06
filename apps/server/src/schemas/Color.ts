import { Schema } from 'mongoose';

const ColorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hexcode: {
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

export default ColorSchema;
