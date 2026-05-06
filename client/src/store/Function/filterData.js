const filterData = (set) => (value) => {
  set((state) => ({
    filteredData: value,
    visibleData: state.cacheData.filter((el) => {
      if (!value) return true;
      return el.name.toLowerCase().includes(value.toLowerCase());
    }),
  }));
};

export default filterData;
