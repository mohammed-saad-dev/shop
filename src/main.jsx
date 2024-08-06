import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart.jsx'

const routes = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "cart", element: <Cart /> },
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider  router={routes}/>
)
