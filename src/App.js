import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Quiz from "./components/Quiz/Quiz";
import HTML from "./components/Subjects/HTML";
import JavaScript from "./components/Subjects/JavaScript";
import PHP from "./components/Subjects/PHP";
import { useState } from "react";
import {
  createTheme,
  Paper,
  ThemeProvider,
  MenuItem,
  TextField,
} from "@material-ui/core";
import WordPress from "./components/Subjects/WordPress";
function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  // console.log(data);
  const [state, setState] = useState("Easy");
  // console.log(state);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Paper style={{ height: "100vh" }}>
          <div className="App">
            <Switch>
              <Route path="/" exact>
                <TextField
                  id="standard-select-currency"
                  value={state}
                  select
                  label="Select difficulty"
                  onChange={(e) => setState(e.target.value)}
                >
                  <MenuItem value="Easy">Easy</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Hard">Hard</MenuItem>
                </TextField>
                <Quiz />
              </Route>
              <Route path="/HTML">
                <HTML Subject="HTML" Level={state} />
              </Route>
              <Route path="/JavaScript">
                <JavaScript Subject="JavaScript" Level={state} />
              </Route>
              <Route path="/PHP">
                <PHP Subject="PHP" Level={state} />
              </Route>
              <Route path="/WordPress">
                <WordPress Subject="WordPress" Level={state} />
              </Route>
            </Switch>
          </div>
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
