// import React from 'react'
import "./index.css"
import App from "./App"
import axios from "axios"
import ReactDOM from "react-dom/client"
axios.defaults.baseURL = "https://localhost:8000/api"

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
