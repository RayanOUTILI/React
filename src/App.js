import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Main" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      {/* on met un lien vers main */}
      <a href="/Main">Main</a>
    </div>
  );
}

export default App;
