import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

console.log('CLOUDINARY_NAME:', process.env.CLOUDINARY_NAME); // ✅ Should print dgxjgg60l
console.log('JWT_SECRET:', process.env.JWT_SECRET);
const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, // ✅ THIS IS THE CORRECT KEY
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};

export default connectCloudinary;
