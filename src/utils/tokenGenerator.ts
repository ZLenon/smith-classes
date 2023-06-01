import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/Jwt';

const secret = process.env.JWT_SECRET || 'secret';

if (!secret) {
  throw new Error('Falta JWT_SECRET no .env');
}

const tokenGenerator = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

export default {
  tokenGenerator,
};