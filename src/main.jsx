
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/Routes'

// import App from './App.jsx'
import './index.css'

import {

  RouterProvider
} from "react-router-dom"
import Authprovider from './Pages/Providrer/Authprovider'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   
    <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
