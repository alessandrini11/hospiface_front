import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:8000/api'
ReactDOM.createRoot(document.getElementById('root')).render(
<App />,
)
