const increment = (set) => (id) => {
  set((state) => ({
    basket: state.basket.map((el) =>
      el.id === id && el.count < 10 ? { ...el, count: el.count + 1 } : el,
    ),
  }));
};

export default increment;
