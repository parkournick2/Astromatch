import React, { useState } from "react";
import Header from "./components/Header";
import Explore from "./pages/Explore";
import Matchs from "./pages/Matchs";
import { SnackbarProvider} from 'notistack';

function App() {
  const [page, setPage] = useState(<Explore />);

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
    <SnackbarProvider maxSnack={1}>
      <Header changePage={changePage} />
      {page}
    </SnackbarProvider>
  );
}

export default App;
