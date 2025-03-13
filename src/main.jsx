import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HandleRouter from './assets/components/handleRouter/handleRouter.jsx'
  import { ToastContainer } from 'react-toastify';

import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    <HandleRouter />
    <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
  </BrowserRouter>,
)
