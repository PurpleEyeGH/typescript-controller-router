import { Router } from "express";

interface ControllerInterface {
    path: string;
    router: Router;

    intializeRoutes(): void;
}

export default ControllerInterface