import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styled/globalstyles.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
  </BrowserRouter>
)
