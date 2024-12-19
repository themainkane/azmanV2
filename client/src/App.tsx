import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
export default App;
//   <div className="App">
//   <header className="App-header">
//     <img
//       src={daff}
//       className="Daffodil-logo"
//       alt="logo"
//       style={{ width: "30rem" }}
//     />
//     <p>Daffodil Software | Project Boilerplate</p>
//     <a
//       className="App-link"
//       href="https://daffodil-group.co.uk"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Daffodil Group
//     </a>
//   </header>
// </div>
