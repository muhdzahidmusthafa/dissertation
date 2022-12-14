import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import Container from "react-bootstrap/Container";
import GameLoadingContainer from "./components/GamePage/GameLoadingContainer";
import { MenuPage } from "./components/MenuPage/MenuPage";
import { Login } from "./components/LogInPage/login";
import LeaderBoardPage from "./components/LeadBoardPage/LeaderBoard";
import OptionPage from "./components/OptionsPage/OptionPage";
import NewGame from "./components/NewGame/NewGame";
import NewGame1 from "./components/NewGame/newgame1";


localStorage.clear()
const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container className="app">
        <Switch>
          <Route exact path="/game">
            <GameLoadingContainer />
          </Route>
          <Route exact path="/newgame">
            <NewGame />
          </Route>
          <Route exact path="/newgame1">
            <NewGame1 />
          </Route>
          <Route exact path="/playexisting">
            <MenuPage />
          </Route>
          <Route exact path="/">
            <OptionPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/leadboard">
            <LeaderBoardPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  </Provider>
);

export default App;
