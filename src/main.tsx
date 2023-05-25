import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import  Home  from './routes/Home.tsx'
import  Login  from './routes/Login.tsx'
import './index.css'
import QRead from './routes/QRead.tsx'
import PrescriptionPage from './routes/PrescriptionPage.tsx'
import Payment from './routes/Payment.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/qread',
    element: <QRead />
  }, 
  {
    path: '/prescription',
    element: <PrescriptionPage/>

  },
  {    path: '/payment',
    element: <Payment />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
