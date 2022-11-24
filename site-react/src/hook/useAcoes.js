import { useContext } from "react";
import { acoesContext } from "../context/acoesContext";

export function useAcoes() {
    const context = useContext(acoesContext);
    return context;
}