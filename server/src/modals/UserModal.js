import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String }, // ✅ Added this
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  role: { type: String, enum: ['vendor', 'seller'], default: 'vendor' }
});

const User = mongoose.model('User', userSchema);
export default User;