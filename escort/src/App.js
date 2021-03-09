import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Kasper} from './componets';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/kasper" exact component={() => <Kasper />} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
