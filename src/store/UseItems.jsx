import { useContext } from "react";
import { ItemContext } from "./ItemsProvider.jsx";

export default function useItems() {
    return useContext(ItemContext);
}