import { Allproducts, Cadastrar } from 'src/types/Product';
import { ReturnSevice } from 'src/types/serviceTypes';
import Product from '../database/models/product.model';

// Requisito 1
type ReturnCadastrarProduto = ReturnSevice<Cadastrar>;
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

// Requisito 2
export type ReturnBuscaProduto = ReturnSevice<Allproducts[]>;
const buscaTodosProdutosService = async (): Promise<ReturnBuscaProduto> => {
  const todosProdutosData = await Product.findAll();
  const todosProdutos = todosProdutosData.map((produto) => produto.dataValues);

  /* console.log(todosProdutos); */

  return {
    type: 'OK',
    data: todosProdutos,
  };
};

export default {
  cadastrarProdutoService,
  buscaTodosProdutosService,
};