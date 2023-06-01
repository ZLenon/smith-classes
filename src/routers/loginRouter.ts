import express from 'express';

import controllers from '../controllers/userController';
import middle from '../middleware/validLogin';

const loginRouter = express.Router();

loginRouter.post('/', middle.validName, controllers.loginControler);// Requisito 4

export default loginRouter;