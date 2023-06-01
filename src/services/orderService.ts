import { Model, Sequelize } from 'sequelize';
import ModelOrder from '../database/models/order.model';
import ModelProduct from '../database/models/product.model';
import { Order } from '../types/Order';
import { ReturnSevice } from '../types/serviceTypes';

// Requisito 3
type ReturnListaTodosPedidos = ReturnSevice<Model<Order>[]>;
const listaTodosPedidosControler = async (): Promise<ReturnListaTodosPedidos> => {
  // Fiz com ajuda dos summers da manha
  const dataTodosPedidos = await ModelOrder.findAll({
    attributes: [
      'id', 'userId',
      [Sequelize.literal('JSON_ARRAYAGG(`productIds`.`id`)'), 'productIds'],
    ],
    include: [{
      model: ModelProduct,
      attributes: [],
      as: 'productIds', 
    }],
    group: ['Order.id'],
    raw: true,
  });
  /*  console.log('INICIO!!', dataTodosPedidos, 'FIM!!!'); */  
  return { type: 'OK', data: dataTodosPedidos as Model<Order>[] };
};

export default {
  listaTodosPedidosControler,
};

/* 
attributes: ['id', 'userId', [Sequelize.literal('JSON_ARRAYAGG(productIds.id)'), 'productIds'],],: Define quais colunas serão 
retornadas na consulta. Nesse caso, serão retornados os atributos 'id' e 'userId' da tabela representada por ModelOrder, bem
 como um atributo adicional chamado 'productIds', que será criado usando a função JSON_ARRAYAGG do banco de dados. A função 
 Sequelize.literal permite escrever expressões SQL diretamente no código.

include: [{ model: ProductModel, attributes: [], as: 'productIds' }],: Define uma inclusão de modelo na consulta. Aqui, o 
modelo ProductModel é incluído na consulta e é atribuído o apelido (alias) 'productIds'. Os atributos são definidos como 
vazios ([]), o que significa que nenhum atributo específico será selecionado da tabela representada por ProductModel.

group: ['Order.id'],: Define a cláusula GROUP BY da consulta. Isso agrupa os resultados pelo atributo 'id' da tabela
 representada por ModelOrder.

raw: true,: Define que os resultados da consulta devem ser retornados como objetos JavaScript puros (raw), em vez de 
instâncias dos modelos do Sequelize.
*/