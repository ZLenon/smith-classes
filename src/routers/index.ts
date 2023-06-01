import express from 'express';

import productsRouter from './productRouter';
import ordersRouter from './orderRouter';
import loginRouter from './loginRouter';

const routers = express.Router();

routers.use('/products', productsRouter);
routers.use('/orders', ordersRouter);
routers.use('/login', loginRouter);

export default routers;