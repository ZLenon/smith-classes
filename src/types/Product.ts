export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};
// Requisito 1
export type Cadastrar = {
  id: number,
  name: string,
  price: string
};
// Requisito 2
export type Allproducts = {
  id: number,
  name: string,
  price: string,
  orderId: number | null
};
