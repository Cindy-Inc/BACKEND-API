const env = process.env.NODE_ENV || 'dev';

if (env === 'dev') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/Cindy';
}