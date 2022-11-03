/**
 * Die React Klassenkomponente muss die Component Klasse von React erben
 * Deswegen müssen wir sie importieren
 */

import { Component } from "react";
import User from "./Components/User";
import Button from "react-bootstrap/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      name: "Rahman",
    };
  }

  logIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>User Profile</h1>
        <User name={this.state.name} loggedIn={this.state.loggedIn} />
        <Button className="m-1" onClick={this.logIn}>
          {this.state.loggedIn ? "Log out" : "Log in"}
        </Button>
        <div>
          <input onChange={this.changeName} value={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;
