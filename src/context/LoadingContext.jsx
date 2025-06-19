import { createContext, useContext, useState } from "react";
import LoadingLayout from "../layouts/LoadingLayout";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <LoadingLayout />}
    </LoadingContext.Provider>
  );
}
const useLoading = () => useContext(LoadingContext);

export { LoadingProvider, useLoading };
