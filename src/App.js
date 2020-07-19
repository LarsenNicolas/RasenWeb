import React from 'react';
import logo from './rasenlogo.jpg';
import './App.css';
import {Nav, Navbar} from "react-bootstrap";
import {Route} from "react-router";
import Home from "./views/Home";
import ProductList from "./views/ProductList";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
              <Navbar.Brand href="/home">
                  <img
                  src={logo}
                  width="90"
                  height="90"
                  className="d-inline-block align-top"
                  alt="Rasen"
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="/home">Home</Nav.Link>
                      <Nav.Link href="/productsList">Productos</Nav.Link>
                      <Nav.Link href="/contact">Contacto</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </header>
        <div>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/productsList" component={ProductList} exact/>
        </div>
      <div class="body">
      </div>
    </div>
  );
}

export default App;
