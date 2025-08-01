// models/contact.model.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;