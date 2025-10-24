import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';
import AuthProvaider from './ProvaideAuth/AuthProvaider.jsx';
import { ToastContainer, toast } from 'react-toastify';








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvaider>


  </StrictMode>,
)
