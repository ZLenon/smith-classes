import express from 'express';

import productsRouter from './productRouter';

const routers = express.Router();

routers.use('/products', productsRouter);// Requisito 1

export default routers;