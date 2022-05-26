import { Router } from "express";
import { short, find } from "../controllers/urls.controller";

const urlsRoute = Router()

urlsRoute.post('/', short)
urlsRoute.get('/:token', find)

export default urlsRoute