const decrement = (set) => (id) => {
  set((state) => ({
    basket: state.basket.map((el) =>
      el.id === id && el.count > 1 ? { ...el, count: el.count - 1 } : el,
    ),
  }));
};

export default decrement;
