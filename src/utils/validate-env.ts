import { cleanEnv, str, num } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    MONGO_USER: str(),
    MONGO_PASSWORD: str(),
    MONGO_CLUSTER: str(),
    MONGO_DB: str(),
    PORT: num(),
  });
}

export default validateEnv;