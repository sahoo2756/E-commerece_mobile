import { useContext } from "react";
import { createContext } from "react";

const currentUserDetailsContext = createContext();

function useCurrentUserDetails() {
  return useContext(currentUserDetailsContext);
}

export { currentUserDetailsContext, useCurrentUserDetails };
