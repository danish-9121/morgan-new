import React from "react";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom/cjs/react-router-dom";
import Header from './Components/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ContactUs from './pages/ContactUs';
import Footer from './Components/Footer';
import './App.css'; 

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Service' component={Service}/>
        <Route path='/ContactUs' component={ContactUs}/>
      </Switch>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
