import { createContext } from "react";

export type ContextFilterValuesType = {
    contextFilterValues: number;
    setContextFilterValues: (contextFilterValues: number) => void;
};

export const ContextFilterValues = createContext<ContextFilterValuesType>({
    contextFilterValues: 0,
    setContextFilterValues: () => {},
})