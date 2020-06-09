import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Cooking from "./components/Cooking/Cooking";
import Writing from "./components/Writing/Writing";
import ProjectInfo from "./components/Projects/ProjectInfo"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" component={About} exact>
          </Route>
          <Route path="/projects" component={Projects}  exact>
          </Route>
          <Route path="/cooking" component={Cooking} exact>
          </Route>
          <Route path="/writing" component={Writing} exact>
          </Route>
          <Route path="/projects/:id" component={ProjectInfo} >
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
