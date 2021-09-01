import React from 'react';
import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import './assets/styles/App.css';
import Routes from './routes';

function App() {
  return (
    <>
    <Routes/>
    <ToastContainer autoClose={3000}/> 
    </>
  );
}

export default App;
