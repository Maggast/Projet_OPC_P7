import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Apropos from './pages/Apropos'
import Fichelogement from './pages/Fichelogement'
import './styles/Index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apropos' element={<Apropos/>}/>
        <Route path='/fichelogement/:id' element={<Fichelogement/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


