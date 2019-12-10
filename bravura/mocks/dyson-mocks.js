const user = {
  path: '/auth',
  delay: 1000,
  template: {
    name: 'Alojzy Ciurlok',
    token: 'dkfje89fh3489fijsdkljfwej9fk23pojosefjk;wek@439fj03',
    permissions: ['products']
  }
};

const config = {
  path: '/config',
  delay: 3000,
  template: {
    productsApiUrl: 'http://localhost:3000'
  }
};

module.exports = { user, config };
