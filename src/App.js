import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Explore from "./pages/Explore";
import Matchs from "./pages/Matchs";
import { SnackbarProvider } from "notistack";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";

function App() {
  const [page, setPage] = useState(<Explore />);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    
    if(localStorage.getItem('darkMode') === 'true'){
      setDarkMode(true)
    }
  },[])

  const backgroundColor = () => {
    if (darkMode) {
      return "#303030";
    } else {
      return "#fff";
    }
  };

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : 'light',
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
      background: {
        default: backgroundColor(),
        dark: "#303030",
      },
    },
  });

  const changePage = (page) => {
    switch (page) {
      case "Explore":
        setPage(<Explore />);
        break;
      case "Matchs":
        setPage(<Matchs />);
        break;
      default:
        alert("Erro 404, página não encontrada!");
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={1}>
        <Header changePage={changePage} darkMode={darkMode} setDarkMode={setDarkMode}/>
        {page}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
