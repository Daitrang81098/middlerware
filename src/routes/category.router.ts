import categoryController from "../controllers/categoryController";
import {Router} from "express";
export const categoryRouter = Router();
categoryRouter.get('/',categoryController.getAll);
