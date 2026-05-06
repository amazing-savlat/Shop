import { create } from "zustand";
import getData from "./Function/getAsync";
import throwToBasket from "./Function/throwToBasket";
import deleteFromBasket from "./Function/deleteFromBasket";
import increment from "./Function/increment";
import decrement from "./Function/decrement";
import { persist, createJSONStorage } from "zustand/middleware";
import filterData from "./Function/filterData";
import getBasketTotal from "./Function/getBasketTotal";

const useGadgetsStore = create(
  persist(
    (set, get) => ({
      modalOpen: false,
      filteredData: "",
      loading: true,
      error: null,
      basket: [],
      cacheData: [],
      visibleData: [],
      orders: [],
      getData: getData(set),
      throwToBasket: throwToBasket(set, get),
      deleteFromBasket: deleteFromBasket(set),
      increment: increment(set),
      decrement: decrement(set),
      filterData: filterData(set),
      getBasketTotal: getBasketTotal(get),
      clearBasket: () => set({ basket: [] }),
      toggleModal: () => set((state) => ({ modalOpen: !state.modalOpen })),
      addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
    }),
    {
      name: "basket",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        basket: state.basket,
        orders: state.orders,
      }),
    },

  ),
);

export default useGadgetsStore;
