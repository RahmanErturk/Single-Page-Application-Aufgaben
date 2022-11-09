import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useReducer } from "react";
import user from "./user";

const initState = {
  inputEmail: "",
  inputPassword: "",
  loggedInUser: null,
  alert: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateInputEmail":
      state = {
        ...state,
        inputEmail: action.value,
      };
      break;
    case "updateInputPassword":
      state = {
        ...state,
        inputPassword: action.value,
      };
      break;
    case "loginUser":
      if (!state.inputEmail || !state.inputPassword) {
        state = {
          ...state,
          alert: "Bitte gebe Passwort und Email an.",
        };
        break;
      }
      const foundUser = user.find((u) => u.email === state.inputEmail);
      if (foundUser) {
        if (foundUser.password === state.inputPassword) {
          state = {
            ...state,
            loggedInUser: foundUser.email,
            alert: null,
          };
        } else {
          state = {
            ...state,
            alert: "Password nicht korrekt",
          };
        }
      } else {
        state = {
          ...state,
          alert: "Email nicht gefunden",
        };
      }
      break;
    default:
      console.warn("Unknown action");
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      {state.alert ? <Alert variant="warning">{state.alert}</Alert> : null}
      <Container>
        {state.loggedInUser ? (
          <h1>Welcome to our Website {state.loggedInUser}</h1>
        ) : (
          <>
            <Row>
              <h1>Log In</h1>
            </Row>
            <Row>
              <input
                className="m-2"
                type="email"
                placeholder="E-Mail"
                value={state.inputEmail}
                required
                onChange={(e) =>
                  dispatch({ type: "updateInputEmail", value: e.target.value })
                }
              />
            </Row>
            <Row>
              <input
                className="m-2"
                type="password"
                placeholder="Password"
                required
                value={state.inputPassword}
                onChange={(e) =>
                  dispatch({
                    type: "updateInputPassword",
                    value: e.target.value,
                  })
                }
              />
            </Row>
            <Row>
              <Button
                className="m-2"
                onClick={() => dispatch({ type: "loginUser" })}
              >
                Anmelden
              </Button>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
