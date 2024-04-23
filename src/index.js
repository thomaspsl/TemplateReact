import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Networks from "./routes/Networks";
import Rights from "./routes/Rights";
import Unknown from "./routes/Unknown";
import App from "./routes/App";

// Attributs
const root = ReactDOM.createRoot(document.getElementById('root'));
const name = process.env.REACT_APP_NAME;

// Routes
root.render( //AuthContext
<>
  <React.StrictMode> 

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />}>

          {/* New Website Routes */}
          <Route path="/" element={<Home title={"Homepage | " + name} />}  />
          <Route path="/login" element={<Login title={"Login | " + name}/>}  />
          <Route path="/networks" element={<Networks title={"Networks | " + name}/>}  />
          <Route path="/rights" element={<Rights title={"Rights | " + name}/>}  />

          {/* Unknow Routes */}
          <Route path="/404" element={<Unknown title={"404page | " + name}/>} />
          <Route path='/*' element={<Navigate replace to="/404"/>} />

        </Route>

      </Routes>

    </BrowserRouter> 

  </React.StrictMode>
</>
);