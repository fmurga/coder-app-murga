

export const getItemById = (id, products) => {
   const item = products.find(element => element.id === id);
   return item;
}