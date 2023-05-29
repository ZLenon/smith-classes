import { Request, Response } from 'express';
import service from '../services/orderService';

// Requisito 3
const listaTodosPedidos = async (
  _request: Request,
  response: Response,
): Promise<Response> => {
  const todosPedidos = await service.listaTodosPedidosControler();

  return response.status(200).json(todosPedidos.data);
};

export default {
  listaTodosPedidos,
};