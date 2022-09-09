import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap" rel="stylesheet"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=250b53fdce5682befb2cfda95d58e3c1" />
);

