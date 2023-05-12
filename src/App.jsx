import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './Footer'
const App = ()=>{
    return(
        <>
        <Navbar/>
        
        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/service' Component={Service}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='*' Component={Error}/>
        </Routes>
        <Footer/>
        </>
    )
}
export default App