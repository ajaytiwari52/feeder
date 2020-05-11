import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./components/Search";

export default class extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar>
          {/* "Link" in brand component since just redirect is needed */}
          <Navbar.Brand as={NavLink} to="/">
            Halodoc
          </Navbar.Brand>
          <Nav>
            {/* "NavLink" here since "active" class styling is needed */}
            <Nav.Link as={NavLink} to="/">
              Search
            </Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/" exact component={Search} />
      </div>
    </Router>
    );
  }
}
