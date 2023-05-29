import express from 'express';

import controllers from '../controllers/orderController';

const orderRoute = express.Router();

orderRoute.get('/', controllers.listaTodosPedidos);// Requisito 3

export default orderRoute;