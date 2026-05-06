const getData = (set) => async (data) => {
  try {
    set({ loading: true });
    const res = await fetch(`http://localhost:5500/${data}`);
    let json = await res.json();
    set({ cacheData: json, visibleData: json, loading: false});
  } catch (error) {
    console.log(error);
    set({ loading: false, error: error.message });
  }
};

export default getData;