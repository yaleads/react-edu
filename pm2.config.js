module.exports = {
  apps : [{
    name: 'React Edu',
    script: './build/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 2,
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    env_production: {
      NODE_ENV: 'production',
      PORT: 9020
    }
  }],

  deploy : {
    production : {
      ref  : 'origin/master',
      'post-deploy' : 'yarn && yarn build:server && pm2 startOnRestart pm2.config.js --env production'
    }
  }
};
