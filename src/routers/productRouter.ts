import express from 'express';

import controllers from '../controllers/productController';

const loginRouter = express.Router();

/* const middlewares = require('../middlewares'); */

loginRouter.post('/', controllers.cadastrarProduto);// Requisito 1

export default loginRouter;