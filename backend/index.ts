// backend/index.ts

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import companionRoute from './api/companion';

// Load .env variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Accept JSON bodies

// 🧠 Routes
app.use('/api', companionRoute);

// 🔥 Server listener
app.listen(PORT, () => {
    console.log(`🧠 Ignis Vita backend is running on http://localhost:${PORT}`);
});