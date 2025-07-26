import express from 'express';
import cors from 'cors';
import connectDB from './src/services/mongodb.js';
import dotenv from 'dotenv';
dotenv.config(); 

import  authRoutes  from './src/routes/authRoutes.js'




const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Mount the route
app.use("/api", authRoutes); 

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});