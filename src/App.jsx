import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import { RegionsContext } from "./context/regionContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Weather from "./pages/Weather";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px
  }
`;

const App = () => {
  const [regions, setRegions] = useLocalStorage("regions", []);
  const value = useMemo(
    () => ({
      regions,
      addRegion: region => {
        const arr = regions ?? [];
        if (!arr.includes(region)) {
          if (arr.length === 5) arr.pop();
          arr.unshift(region);
          setRegions(arr);
        }
      },
      removeRegion: region => {
        if (!regions || regions.length === 0) return;
        if (!regions.includes(region)) return;
        const index = regions.findIndex(v => v === region);
        setRegions([...regions.slice(0, index), ...regions.slice(index + 1)]);
      },
    }),
    [regions, setRegions],
  );

  return (
    <RegionsContext.Provider value={value}>
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather/:region" element={<Weather />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </RegionsContext.Provider>
  );
};

export default App;

