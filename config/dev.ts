export default {
  env: process.env.NODE_ENV,
  port: 8080,
  dbUrl: process.env.DATABASE_URL_LOCAL,
  contactPoints: process.env.CONTACT_POINTS,
  keySpace: process.env.KEY_SPACE,
  contactPassword: process.env.CONTACT_PASSWORD,
  contactUsername: process.env.CONTACT_USERNAME,
  contactPort: process.env.CONTACT_PORT,
  localDataCenter: process.env.LOCAL_DATA_CENTER,
};
