import { createContext, useContext } from "react";

const cookiesInfoContext = createContext();

function useCookiesInfo() {
  return useContext(cookiesInfoContext);
}
export { cookiesInfoContext, useCookiesInfo };
