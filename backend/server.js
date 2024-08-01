//require('dotenv').config();  // Load environment variables from .env file
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = 'mongodb+srv://prachiptrivedi096:fBcqTk0GAsFTmP0n@cluster0.7giut2w.mongodb.net/EcommerceProject?retryWrites=true&w=majority&appName=Cluster0';

//console.log('MONGO_URI:', MONGO_URI);

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
    });

app.use('/api/products', productRoutes);


