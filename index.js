import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SliderSettings from "react-slick"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./About";
import Solutions from "./Solutions";
import Resources from "./Resources";
import Contactus from "./Contactus";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
   <SliderSettings />
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
