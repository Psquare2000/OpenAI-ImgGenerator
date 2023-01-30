import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery',true);
    // useful for search functionality later on

    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {console.log(err)});
}

export default connectDB;