import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./context/problem/App.jsx";

// import App from "./App.jsx";
import AppRouter from "./AppRouter.jsx";
import "./index.css";
import App from "./context/rawSolution/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <AppRouter />
  </React.StrictMode>
);
