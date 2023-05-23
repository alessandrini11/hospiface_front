import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import axios from 'axios'
import Router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import App from './App'
axios.defaults.baseURL = 'https://localhost:8000/api'
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={Router}>
</RouterProvider>
,
)
