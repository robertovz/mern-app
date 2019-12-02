import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Details from './components/Details';
import Footer from './components/Footer';
import ScrollUpButton from 'react-scroll-up-button';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/details/:name/:id" component={Details} />
            </Switch>
          </BrowserRouter>
        <ScrollUpButton />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
