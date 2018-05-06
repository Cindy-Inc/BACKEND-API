'use-strict';

const env = process.env.NODE_ENV || 'development';


if (env === 'development') {
  process.env.PORT = process.env.PORT || 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/cindy';
  process.env.ASST_USER = 'b428669e-3c26-4d12-9827-3ca2675ba251';
  process.env.ASST_PASS = '2rSJYPUuAD5D';
  process.env.ASST_URL = 'https://gateway.watsonplatform.net/assistant/api/';
  process.env.ASST_WORKID = 'ffc973dd-6d08-4cbf-82c6-ef6418aef85d';
}
