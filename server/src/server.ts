import express from 'express';
import connectDB from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


