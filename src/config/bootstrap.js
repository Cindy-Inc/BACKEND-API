const { User } = require('../models/v1/user');

User.findOne({ email: 'admin@cindy.co' }).then((user) => {
  if (!user) {
    const admin = {
      name: 'CINDY',
      email: 'admin@cindy.co',
      password: 'admin@cindy',
      type: 'usuario',
      address: 'Av. Lins de Vasconcelos',
      number: '1157',
      city: 'São Paulo',
      state: 'SP',
      phone: '00000000'
    };
    const userAdmin = new User(admin);
    userAdmin.save();
  }
}).catch((err) => {
  console.log(err);
});
