import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Elementdemo from './Elementdemo.jsx'
//import Counter from './Counter.jsx'
import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form/>
  </StrictMode>,
)