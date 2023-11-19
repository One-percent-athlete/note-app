import mongoose from 'mongoose';

// connect to the data base
mongoose.connect("mongodb://127.0.0.1:27017/note-app").then(() => {
    console.log("connected to DB")
    }).catch((err) => {
        console.log('DB connection failed:', err)
    })