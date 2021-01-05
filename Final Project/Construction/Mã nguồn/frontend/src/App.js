import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import {
  ListDockingStation,
  HiringBike,
  Home,
  ListBike,
  TransactionResult,
  Login1,
  Login
} from './page';




import NavBar from './component/NavBar';

function App() {
  return (
    <Router >
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/docking" component={ ListDockingStation } />
          <Route exact path="/login" component={ Login1 } />
          <Route path="/get-bike/station-:id" component={ ListBike } />
          <Route path="/get-bike/hiring-bike/:bikeId" component={ HiringBike } />
          <Route exact path="/transaction" component={ TransactionResult } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
