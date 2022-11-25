import { useContext } from "react";
import { AcoesContext } from "../context/AcoesContext";

export function useAcoes() {
    const context = useContext(AcoesContext);
    return context;
}