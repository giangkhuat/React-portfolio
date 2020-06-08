import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Cooking from "./components/Cooking/Cooking";
import Writing from "./components/Writing/Writing";
import Banner from "./components/Banner/Banner";
import Container from "./components/Container/Container";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/cooking" exact>
            <Cooking />
          </Route>
          <Route path="/writing" exact>
            <Writing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
