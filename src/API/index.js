export const getRecentOrders = async () => {
  const res = await fetch("https://dummyjson.com/carts/1");
    return await res.json();
};

export const getInventory = async () => {
  const res = await fetch("https://dummyjson.com/products");
    return await res.json();
};

export const getOrders = async () => {
  const res = await fetch("https://dummyjson.com/carts");
    return await res.json();
};

export const getCustomers = async () => {
  const res = await fetch("https://dummyjson.com/users");
    return await res.json();
};
