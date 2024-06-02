import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header';
import Home from '../src/Components/Home';
import Education from '../src/Components/Education';
import Skills from '../src/Components/Skills';
import Projects from '../src/Components/Project';
import Contact from '../src/Components/Contact';
import Navbar from './Components/NavBar';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/Skills",
      element: <><Skills/></>
    },
    {
      path : "/contact",
      element : <><Navbar/><Contact/></>
    },
    {
      path : "/projects",
      element : <><Projects/></>
    },
    {
      path : "/education",
      element : <><Education/></>
    }
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  );
}

export default App;
