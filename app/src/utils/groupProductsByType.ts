export const groupProductsByType = (products: any[] = []) => {
  return products.reduce((acc: any, item: any) => {
    const type = item.type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});
};
