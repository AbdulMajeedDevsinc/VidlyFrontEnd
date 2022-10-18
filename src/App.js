import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <NavBar />
        {/* <Movies /> */}
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Redirect exact from="/" to="/movies" />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
