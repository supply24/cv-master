import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import './index.css';
import App from './App';
import Home from "./Home"
import CVclean from './CVclean';
import CVself from './CVself';
import CVstorage from './CVstorage';
import CVkitchen from './CVkitchen';
import CVbud from "./CVbud";
import PBclean from './PBclean';
import CVselfeng from "./CVselfeng"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/cvclean" element={<CVclean />} />
      <Route path="/cvself" element={<CVself />} />
        <Route path="/cvselfeng" element={<CVselfeng />} />
      <Route path="/cvstorage" element={<CVstorage />} />
      <Route path="/cvkitchen" element={<CVkitchen />} /><Route path="/cvbud" element={<CVbud />} />
      <Route path="/pbclean" element={<PBclean />} />

    </Route>
  )
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


