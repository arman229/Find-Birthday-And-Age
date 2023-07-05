import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {DobApp} from "./dobCalculator/DobApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DobApp/>
    </React.StrictMode>
);

 reportWebVitals();
