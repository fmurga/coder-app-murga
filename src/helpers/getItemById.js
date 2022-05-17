import { products } from "../data/products";

export const getItemById = (id) => {
   const item = products.find(element => element.id === id);
   return item;
}