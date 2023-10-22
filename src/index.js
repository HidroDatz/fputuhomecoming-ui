import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import TicketForm from './sreens/homeComingTicket'
import reportWebVitals from './reportWebVitals';
import hcmBackground from './asset/hcm_background.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundImage = `url(${hcmBackground})`;
document.body.style.backgroundSize = 'cover';
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='/ticket' element={<TicketForm/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
