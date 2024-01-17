import React, { createContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
export const BasketContext = createContext();
function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);
  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      return;
    }
    basket[index].count++;
    setBasket([...basket]);
  }
  function removeItem(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
  }
  return (
    <BasketContext.Provider value={{ basket, addBasket, removeItem }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
