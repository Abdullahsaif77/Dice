import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import Main from './Components/Main';
import Rules from './Components/Rules';
import {
  createBrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
   <Main/>
    </>
  );
}

export default App;