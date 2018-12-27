module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('Account', function(err) {
    if (err) throw err;
    app.models.Account.create([{
      role: 'Admin',
      createdAt: '2018-12-21T02:16:50.464Z',
      name: 'andre',
      username: 'machado',
      email: 'm@gmail.com',
      emailVerified: true,
      password: "abc"
    }], function(err, Account) {
      if (err) throw err;
    });
  });
};
