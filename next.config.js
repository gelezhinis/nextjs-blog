const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_user: 'gelezhinis',
        mongodb_password: 'test',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-blog-site-development'
      }
    }
  }

  return {
    env: {
      mongodb_user: 'gelezhinis',
      mongodb_password: 'test',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-blog-site'
    }
  }
};

