const deleteFromBasket = (set) => (id) => {
  set((state) => ({
    basket: state.basket.filter((el) => el.id !== id),
  }));
};

export default deleteFromBasket;
