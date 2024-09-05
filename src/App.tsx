import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Header from "./components/header";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { GlobalStyles } from "./styles/globalStyle";

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.value);
  const theme = {
    colors: {
      elements: darkMode ? "#2b3945" : "#ffffff",
      bg: darkMode ? "#202c37" : "#fafafa",
      text: darkMode ? "#ffffff" : "#111517",
      input: "#858585",
    },
  };
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryName" element={<Details />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
