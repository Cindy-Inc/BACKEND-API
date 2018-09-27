const { User } = require('../models/v1/user');

User.findOne({ username: 'admin' }).then((user) => {
  if (!user) {
    const admin = {
      name: 'CINDY',
      email: 'admin@cindy.co',
      level: 3,
      password: 'admin@cindy',
      username: 'admin'
    };
    const userAdmin = new User(admin);
    userAdmin.save();
  }
}).catch((err) => {
  console.log(err);
});
