import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send("API Working");
});

// Start the app only after DB and Cloudinary are connected
const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary(); // ✅ wait for cloudinary config
    app.listen(port, () => console.log('Server started on PORT : ' + port));
  } catch (err) {
    console.error("Startup Error:", err);
  }
};

startServer();
