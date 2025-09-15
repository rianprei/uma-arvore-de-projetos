import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import OutraPagina from "./OutraPagina.jsx"; // <- cria esse arquivo depois
import Verificado from "./Verificado.jsx";
import Logando from "./Logando.jsx";
import Acesso from "./acesso.jsx";
import Ferramentas from "./Ferramentas.jsx";
import Oquesomos from "./oquesomos.jsx";
import UseState from "./UseState.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />{" "}
        {/* Página principal */}
        <Route
          path="/outra"
          element={<OutraPagina />}
        />{" "}
        {/* Nova página */}
        <Route
          path="/verificado"
          element={<Verificado />}
        />
        <Route
          path="/login"
          element={<Logando />}
        />
        <Route
          path="/acesso"
          element={<Acesso />}
        />
        <Route
          path="/ferramenta"
          element={<Ferramentas />}
        />
        <Route
          path="/oquesomos"
          element={<Oquesomos />}
        />
        <Route
        path="/usestate"
          element={<UseState />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
