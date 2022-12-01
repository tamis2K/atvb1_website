import { useContext } from "react";
import { AcoesContext } from "../context/acoesGa";

export function useAcoes() {
    const context = useContext(AcoesContext);
    return context;
}