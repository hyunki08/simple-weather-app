import { createContext } from "react";

export const RegionsContext = createContext({
  regions: [],
  addRegion: () => {},
});
