import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            index
            path="/"
            element={
              <ItemListContainer greeting="Mensaje de bienvenida, este es el Item List Container" />
            }
          />
          <Route path="/detalle" element={<ItemCount stock="5" initial="1" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
