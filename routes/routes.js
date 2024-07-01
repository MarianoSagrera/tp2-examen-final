import { Router } from "express";
import Controller from "../controller/ControllerSonda.js";

const routes = Router();
const controller = new Controller();

routes.post('/sonda', controller.crearSonda);
routes.get('/sondas', controller.obtenerTodas);
routes.get('/sonda/:id', controller.buscarPorID);

export default routes;
