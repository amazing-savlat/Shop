const getBasketTotal = (get) => () => {
  return get().basket.reduce(
    (total, item) => total + item.price * item.count,
    0,
  );
};

export default getBasketTotal;