import { createContext, FC, PropsWithChildren, useState } from "react";

interface AppState {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export const AppStateContext = createContext({} as AppState);
export const AppStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <AppStateContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppStateContext.Provider>
  );
};
