import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import HooksDemo from "./pages/HooksDemo";
import UseCountContextHook from "./context/UseContextHook";
import { CountProvider } from "./context/CountContext";

function AppRouter() {
  return (
    <Router>
      <CountProvider>
        <div className="App">
          <header className="App-header">
            <h1>React Router Demonstration App</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/hooks">Hooks Demo</Link>
                </li>
                <li>
                  <Link to="/context">Context Demo</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hooks" element={<HooksDemo />} />
              <Route path="/context" Component={<UseCountContextHook />} />
            </Routes>
          </main>
        </div>
      </CountProvider>
    </Router>
  );
}

export default AppRouter;
