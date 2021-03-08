import { createContext } from "node:vm";
import { ReactNode } from "react";

interface IModalContextData {}

interface ModalProviderProps {
  children: ReactNode;
}
export const ModalContext = createContext({} as IModalContextData);
export function ModalProvider({ children }: ModalProviderProps) {
  return <ModalContext.Provider value={{}}>{children}</ModalContext.Provider>;
}
