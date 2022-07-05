import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from './components/Panel';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='Panel' element={<Panel />} /> 
    </Routes>
    </BrowserRouter>

);


