export type Order = {
  id: number;
  userId: number;
  productIds?: number[]; // no plural
};
