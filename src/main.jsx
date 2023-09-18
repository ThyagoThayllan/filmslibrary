import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Routes/pages/Home/Home.jsx'
import { Movie } from './Routes/pages/Movie/Movie.jsx'
import { Search } from './Routes/pages/Search/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
