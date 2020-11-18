import ControllerInterface from '../interfaces/controller.interface';
import { Request, Response, Router } from 'express';
import { UserClass, userModel } from '../models/user.interface.model';
import { Document as DocumentMongoose } from 'mongoose';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

class UserSignupController implements ControllerInterface {
  public path = '/signup';
  public router = Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.post(this.path, this.createUser);
  }
 
  private createUser = (request: Request, response: Response) => {
    const userData = plainToClass(UserClass, request.body);
    validate(userData).then(errors => {
      if(errors.length > 0) {
        console.log(errors);
        response.json({
          errors
        })
      } else {
        const createdUser: DocumentMongoose = new userModel(userData);
        createdUser.save()
        .then(savedUser => {
          console.log(savedUser);
          response.json({
            message: 'OK'
        });
        })
        .catch(err => {
          console.log(err);
          response.json({
            message: 'KO'
        });
        })
      }
    })
  }
}
 
export default UserSignupController;