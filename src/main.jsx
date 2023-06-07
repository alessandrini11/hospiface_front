import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import './assets/css/bootstrap.css'
import './assets/css/icon.min.css'
import './assets/css/app.min.css'
import './assets/js/bootsrap'
import './assets/js/feather.min.js'
import './assets/js/app'
import './assets/js/layout'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './routes/AuthProvider'
// axios.defaults.baseURL = 'https://localhost:8000/api'
axios.defaults.baseURL = 'https://hospiface.schuamealexandre.com/api'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
        <App></App>
    </AuthProvider>
    </BrowserRouter>
,
)
