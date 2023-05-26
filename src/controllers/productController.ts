import { Request, Response } from 'express';
import service from '../services/productService';

// Requisito 1
const cadastrarProduto = async (request: Request, response: Response): Promise<Response> => {
  const { name, price, orderId } = request.body;
  const produtoCadastrado = await service.cadastrarProduto(orderId, price, name);
  return response.status(201).json(produtoCadastrado.data);
};

export default {
  cadastrarProduto,
};