import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App1 from './App1'
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
{/* <React.StrictMode>
<BrowserRouter>
  <App1 />
</BrowserRouter>
</React.StrictMode>, */}