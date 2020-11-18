import * as mongoose from "mongoose";
import { Length, IsEmail, IsMobilePhone, MinLength, MaxLength } from 'class-validator';

export interface UserInterface {
  username: string,
  email: string,
  password: string,
  phone?: number
}

export class UserClass implements UserInterface {

  @MinLength(3, {
    message: 'Username is too short'
  })
  @MaxLength(20, {
    message: 'Username is too long'
  })
  username: string;

  @IsEmail({}, {
    message: 'Incorrect email'
  })
  email: string;

  @MinLength(6, {
    message: 'Password is too short'
  })
  password: string;

  phone?: number | undefined;
  
  constructor(u: string, e: string, pa: string, ph?: number) {
    this.username=u;
    this.email=e;
    this.password=pa;
    this.phone=ph;
  }
}

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  phone: {
      type: Number,
      required: false
  }
});

export const userModel = mongoose.model<UserInterface & mongoose.Document>('User', userSchema);

