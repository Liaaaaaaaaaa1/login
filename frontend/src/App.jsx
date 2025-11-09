// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />           {/* Página principal = Login */}
        <Route path="/login" element={<Login />} />     {/* Otra ruta a Login */}
        <Route path="/register" element={<Register />} /> {/* Registro */}
      </Routes>
    </Router>
  );
}

export default App;
