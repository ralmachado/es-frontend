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
import {AuthProvider, RequireAuth} from "react-auth-kit"
import Register from './routes/Register.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/qread',
    element: <RequireAuth loginPath='/login'>
      <QRead/>
      </RequireAuth>
  }, 
  {
    path: '/prescription',
    element: <RequireAuth loginPath='/login'><PrescriptionPage/></RequireAuth>

  },
  {    
    path: '/payment/:price',
    element: <RequireAuth loginPath='/login'><Payment /></RequireAuth>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider
      authType={"cookie"}
      authName={"token"}
      cookieDomain={window.location.hostname}
      cookieSecure={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
