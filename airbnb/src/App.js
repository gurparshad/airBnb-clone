import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SearchPage from './SearchPage';

function App() {
  return (

    //BEM
    <div className="app">
    <Router>
      <Header/>

      <Switch>

       <Route path="/search">
          <SearchPage/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
        
      </Switch>
      <Footer/>
    </Router>


  {/* home */}
      {/* Header */}

      {/* Banner */}
          {/* search */}

      {/* cards */}

      {/* footer */}

  {/* serch page */}
      {/* Header */}

    </div>
  );
}

export default App;
