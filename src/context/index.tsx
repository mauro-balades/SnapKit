import React from "react";
import { lightTheme } from "../defined-themes";

const _Context = React.createContext(lightTheme);
export const ContextProvider = _Context.Provider;
export const Context = _Context;
