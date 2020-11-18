import App from './app';
import UserSignupController from './controllers/user.signup.controller';
import ConnectionMongoose from './utils/connection-mongoose';
import validateEnv from './utils/validate-env';

validateEnv();

const app = new App(
  [
    new UserSignupController(),
  ]
);
ConnectionMongoose.connectToTheDatabase();

app.listen();
//app.close();