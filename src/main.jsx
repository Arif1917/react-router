import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello from first div</div>
  },
  {
    path:'about',
    element: <div>Hello from second one</div>
  }
  ,{
    path:'oiKire',
    element: <div>Hello from third one</div>
  }
  ,{
    path:'modu',
    element:<App></App>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
