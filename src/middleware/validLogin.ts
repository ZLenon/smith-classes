import { Request, Response, NextFunction } from 'express';

const validName = (
  request: Request,
  response: Response,
  next: NextFunction,
): Response | void => {
  const { username, password } = request.body;

  if (!username || !password) {
    return response.status(400).json({ message: '"username" and "password" are required' });
  }
  return next();
}; 

export default {
  validName,
};