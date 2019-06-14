module.exports = {
  apps : [{
    name: 'React Edu',
    script: './build/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 2,
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      PORT: 9020
    }
  }],

  deploy: {
    production: {
      user: 'pm2',
      host: ['138.68.234.157'],
      ref: 'origin/lesson09',
      repo: 'https://github.com/yaleads/react-edu.git',
      path: '/home/pm2/app',
      'post-deploy': 'yarn && yarn build:server && pm2 startOnRestart pm2.config.js --env production'
    }
  }
};
