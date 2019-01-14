module.exports = function(app) {
  app.dataSources.mysqlDs.isActual('Account', function(err, actual) {
    if (!actual) {
      app.dataSources.mysqlDs.autoupdate('Account', function(err) {
        if (err) throw err;
        app.models.Account.create( [{
          role: 'admin',
          createdAt: Date.now(),
          name: 'André Machado',
          username: 'Machado',
          email: 'm@gmail.com',
          emailVerified: true,
          password: "abc"
        }], function(err, Account) {
          if (err) throw err;
        });
      });
    }
  });

};
