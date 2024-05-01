export const checkInCart = (id: string) => {
  const cartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");
  const ids: string[] = [];

  for (const item of cartItems) {
    ids.push(item.id);
  }

  return ids.includes(id);
};
