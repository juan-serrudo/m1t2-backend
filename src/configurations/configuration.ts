import { join } from 'path';

export default () => {
  const locatePackagejson = process.cwd();
  let pm2 = false;
  if (locatePackagejson.includes('dist')) {
    pm2 = true;
  }

  return {
    packageJson: require(join(process.cwd(), pm2 ? '../package.json' : 'package.json')),
    // port: parseInt(process.env.ENV_PORT, 10) || 3000,
    appMaxSize: process.env.ENV_FILE_MAX_SIZE || '100mb',

    secretKey: process.env.ENV_SECRET_KEY || 's3cr3tK3y!',

    // cors: process.env.ENV_CORS?.split(',') || ['https//localhost:3000'],
  };
};
