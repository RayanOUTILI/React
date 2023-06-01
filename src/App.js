import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Text from "./pages/Text";
import Logo from "./components/Logo";
import Phrase from "./components/Tailwind";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      {/* on fait un menu de navigation  */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="/logo">Logo</a>
          </li>
          <li>
            <a href="/Text">Text</a>
          </li>
        </ul>
      </nav>
      <h1>Ceci est un test</h1>
      {/* lorem ipsum */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quae voluptate voluptatem quod voluptatibus
      </p>

      {/* Ici je veux injecter la suite du lorem avant le logo  */}
      <BrowserRouter>
        <Routes>
          <Route path="/Text" element={<Text />} />
        </Routes>
      </BrowserRouter>

      {/* ici on peut utiliser le composant logo (permet de coder un composant 1 seule fois) */}
      <Logo />

      {/* on appel phrase.js - test tailwindcss */}
      <Phrase />

      <About />

      {/* Permet d'indiquer l'endroit de l'injection de code (ici à la fin) */}
      <BrowserRouter>
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/Logo" element={<Logo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
