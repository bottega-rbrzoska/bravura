const user = {
  path: '/auth',
  template: {
    name: 'Alojzy Ciurlok',
    token: 'dkfje89fh3489fijsdkljfwej9fk23pojosefjk;wek@439fj03',
    roles: ['user']
  }
};

const config = {
  path: '/config',
  delay: 1000,
  template: {
    productsApiUrl: 'http://localhost:3000'
  }
};

module.exports = { user, config };
