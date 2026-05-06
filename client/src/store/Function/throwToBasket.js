const throwToBasket = (set, get) => (id) => {
  const el = get().cacheData.find((el) => el.id === id);

  set((state) => {
    const exists = state.basket.find((item) => item.id === id);

    if (exists) {
      localStorage.setItem("basket", JSON.stringify(state.basket));
      return {
        basket: state.basket.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item,
        ),
      };
    } else {
      return {
        basket: [...state.basket, { ...el, count: 1 }],
      };
    }
  });
};

export default throwToBasket;
