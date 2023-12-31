import express from 'express';

import controllers from '../controllers/productController';

const productRoute = express.Router();

/* const middlewares = require('../middlewares'); */

productRoute.get('/', controllers.buscaTodosProdutosControler);// Requisito 2
productRoute.post('/', controllers.cadastrarProdutoControler);// Requisito 1

export default productRoute;