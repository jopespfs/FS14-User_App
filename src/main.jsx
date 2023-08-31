import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { UsuariosForm } from "./pages/UsuariosForm.jsx";
import { UsuariosTable } from "./pages/UsuariosTable.jsx";
import { Contato } from "./pages/Contato.jsx";
import { Home } from "./pages/Home.jsx";

const router = createBrowserRouter([
  
  {
    path: "/",
    element:<App/>,
    children:[

      {
        path: "/home",
        element:<Home/>,
      },

      {
        path: "/usuarios/:id",
        element:<UsuariosForm/>,
      },
    
      {
        path: "/usuarios",
        element:<UsuariosTable/>,
      },
    
      {
        path: "/contato",
        element:<Contato/>,
      },

    ]
  },

  {
    path: "/login",
    element:<Login/>,
  },

  
]);

/* const router = createBrowserRouter([
  {
    path: "/",
    element:<Login/>,
  },

  {
    path: "/home",
    element:<App/>,
  },

  {
    path: "/usuarios/:id",
    element:<UsuariosForm/>,
  },

  {
    path: "/usuarios",
    element:<UsuariosTable/>,
  },

  {
    path: "/contato",
    element:<Contato/>,
  },
]); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
