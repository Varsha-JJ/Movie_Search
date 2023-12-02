import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './Movie';
import Detailmovie from './Detailmovie';
import Favorates from './Favorates';
import { Provider } from 'react-redux';
import Store from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/movie" element={<Movie/>} />
          <Route path='/view/:id' element={<Detailmovie/>}/>
          <Route path='favorates' element={<Favorates/>}/>
        </Routes>
      </BrowserRouter>
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
