import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter,  Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import Search from './components/pages/Search.jsx'
import AAP from './components/pages/AAP.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/aap/:id' element={<AAP />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
