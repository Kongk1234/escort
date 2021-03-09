import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './componets';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;