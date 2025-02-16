/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import { getProductList } from "../service/product";


const ProductContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProductList("");
      setProductList(data);
    };
    fetchApi();
  }, []);

  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;