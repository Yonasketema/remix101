import merge from "lodash.merge";
import dev from "./dev";
import prod from "./prod";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

let envConfig;

if (process.env.NODE_ENV === "production") {
  envConfig = prod;
} else if (process.env.NODE_ENV === "development") {
  envConfig = dev;
}

const defaultConfig = {
  env: process.env.NODE_ENV,
  //   port: 3001,
  dbUrl: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET,
  contactPoints: process.env.CONTACT_POINTS,
  keySpace: process.env.KEY_SPACE,
  contactPassword: process.env.CONTACT_PASSWORD,
  contactUsername: process.env.CONTACT_USERNAME,
  contactPort: process.env.CONTACT_PORT,
  localDataCenter: process.env.LOCAL_DATA_CENTER,
};

export default merge(defaultConfig, envConfig);
