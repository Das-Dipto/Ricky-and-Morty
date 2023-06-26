import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/home",
    element: <App/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
