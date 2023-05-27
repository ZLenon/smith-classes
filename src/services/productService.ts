import { ReturnSevice } from 'src/types/serviceTypes';
import Product from '../database/models/product.model';

type ReturnCadastrarProduto = ReturnSevice<{
  id: number,
  name: string,
  price: string
}>;
// Requisito 1
const cadastrarProdutoService = async (
  orderId: number,
  price: string,
  name: string,
): Promise<ReturnCadastrarProduto> => {
  const produtoCriado = await Product.create({ name, price, orderId });

  /* console.log(produtoCriado?.dataValues); */
  return {
    type: 'CREATED',
    data: {
      id: produtoCriado?.dataValues.id,
      name: produtoCriado?.dataValues.name,
      price: produtoCriado?.dataValues.price,
    },
  };
};

export default {
  cadastrarProdutoService,
};