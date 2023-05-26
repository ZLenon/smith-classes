import express from 'express';

import controllers from '../controllers/productController';

const productRoute = express.Router();

/* const middlewares = require('../middlewares'); */

productRoute.post('/', controllers.cadastrarProduto);// Requisito 1

export default productRoute;