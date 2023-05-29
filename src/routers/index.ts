import express from 'express';

import productsRouter from './productRouter';
import ordersRouter from './orderRouter';

const routers = express.Router();

routers.use('/products', productsRouter);
routers.use('/orders', ordersRouter);

export default routers;