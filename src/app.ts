import express, { NextFunction } from 'express';
import compression from 'compression';
import cors from "cors";
import 'dotenv/config';
import { Server } from 'http';
import ControllerInterface from './interfaces/controller.interface';

class App {
  private _app: express.Application;
  private _port?: number;
  private _server: Server = new Server();
 
  constructor(controllers: ControllerInterface[], port?: number) {
    this._app = express();
    if(port) {
      this._port = port;  
    } else {
      if (process.env.PORT) {
        this._port = +process.env.PORT;
      } else {
        this._port = 3000;
      }
    }
    
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this._app.use(express.json());
    this._app.use(express.urlencoded( {
      extended: false
    }));
    this._app.use(compression());
    this._app.use(cors());
  }
 
  private initializeControllers(controllers: ControllerInterface[]) {
    controllers.forEach((controller) => {
      this._app.use('/api', controller.router);
    });
  }

  public listen() {
    this._server = this._app.listen(this._port, () => {
      console.log(`App listening on the port ${this._port}`);
    });
  }

  public close() {
    this._server.close();
  }
}
 
export default App;