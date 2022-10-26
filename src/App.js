import LogIn from './pages/login';
import SignUp from './pages/signup';
import Navbar from './components/navbar';
import Home from './pages/home';
import Product from './pages/product'
import Error from './pages/error';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App () {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='*' element={<Error/>}></Route>
        
      </Routes>
    </Router>
  </>
  )
}

export default App

