import { Router } from "express";
import reservationController from '../controllers/reservation-controller.js'
import { validateToken } from "../middlewares/authentication-middleware.js";

const reservationRoutes = Router();

reservationRoutes.all('/*', validateToken)
reservationRoutes.get('/reservation',reservationController.getReservationsByUserId)
reservationRoutes.post('/reservation')
reservationRoutes.delete('/reservation')
reservationRoutes.patch('/reservation')


export default reservationRoutes;