import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { useGlobalContext } from './context';
// components 
import Navbar from './components/navbar';
import Search from './components/search';
// pages
import SignUp from './pages/signup';
import LogIn from './pages/login';
import Error from './pages/error';
import Home from './pages/home';


function App () {
  const {IssearchOpen} = useGlobalContext()

  return (
    <div className={`${IssearchOpen?"search-wrappe-on":"app-container"}`} >
      <Router>
        <Navbar/>
        <Search/>
        <Routes >
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<Error/>}></Route>
          
        </Routes>
      </Router>
  </div>
  )
}

export default App

