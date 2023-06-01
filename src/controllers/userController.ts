import { Request, Response } from 'express';
import service from '../services/userService';

// Requisito 4
const loginControler = async (request: Request, response: Response): Promise<Response> => {
  const { username, password } = request.body;
  const tokenString = await service.loginService(username, password);
  if (tokenString.type === 'NOT_FOUND') {
    return response.status(401).json(tokenString.data);    
  }
  return response.status(200).json(tokenString.data);
};

export default {
  loginControler,
};