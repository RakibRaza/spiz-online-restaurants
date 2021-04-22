import { CssBaseline, ThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./theme";
import Home from "./pages/Home";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

export default App;
