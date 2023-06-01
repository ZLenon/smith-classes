import bcrypt from 'bcryptjs';
// import { Model } from 'sequelize';
import { ReturnSevice } from '../types/serviceTypes';
import ModelUser from '../database/models/user.model';
// import { User } from '../types/User';
import { TokenString } from '../types/Jwt';
import utils from '../utils/tokenGenerator';

// Requisito 4
type RetornoLogin = ReturnSevice<TokenString>;
const loginService = async (username: string, password: string): Promise<RetornoLogin> => {
  const verificaLogin = await ModelUser.findOne({
    where: {
      username,
    },
  });
  if (!verificaLogin || !bcrypt.compareSync(password, verificaLogin.dataValues.password)) {    
    // const tokenDB = verificaLogin?.dataValues.password;
    // console.log('tokenDB', tokenDB, 'Tipo do token', typeof tokenDB); 
    // const validPass = bcrypt.compareSync(password, tokenDB);
    // const userValid = username === verificaLogin?.dataValues.username;    
    return { type: 'NOT_FOUND', data: { message: 'Username or password invalid' } };
  } 
  // await ModelUser.create({ username, password });
  // console.log('AQUI!!!', verificaLogin, 'FIM!!!');  
  const tokenJWT = utils.tokenGenerator({ password, username });
  return { type: 'OK', data: { token: tokenJWT } };
};

export default {
  loginService,
};
