import { ReturnSevice } from 'src/types/serviceTypes';
import Product from '../database/models/product.model';

type returnCadastrarProduto = ReturnSevice<{
  id: number,
  name: string,
  price: string
}>;

const cadastrarProduto = async <returnCadastrarProduto>(
  orderId: number,
  price: string,
  name: string,
): Promise<returnCadastrarProduto> => {
  const produtoCriado = await Product.create({ name, price, orderId });
   
  console.log(produtoCriado?.dataValues);
  return {
    id: produtoCriado?.dataValues.id,
    name: produtoCriado?.dataValues.name,
    price: produtoCriado?.dataValues.price,
  };
};

export default {
  cadastrarProduto,
};