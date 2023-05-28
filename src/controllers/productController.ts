import { Request, Response } from 'express';
import service from '../services/productService';

// Requisito 1
const cadastrarProdutoControler = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  const { name, price, orderId } = request.body;
  const produtoCadastrado = await service.cadastrarProdutoService(orderId, price, name);
  return response.status(201).json(produtoCadastrado.data);
};

// Requisito 2
const buscaTodosProdutosControler = async (
  _request: Request,
  response: Response,
): Promise<Response> => {
  const todosProdutos = await service.buscaTodosProdutosService();
  return response.status(200).json(todosProdutos.data);
};

export default {
  cadastrarProdutoControler,
  buscaTodosProdutosControler,
};