import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Weather from "./pages/Weather";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/weather/:region" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

