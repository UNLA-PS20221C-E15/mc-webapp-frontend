import { useContext } from "react";
import { ProductContext } from "./ProductsProvider.jsx";

export default function useProducts() {
    return useContext(ProductContext);
}