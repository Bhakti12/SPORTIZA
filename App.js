import AllTournament from './Component/AllTournament';
import AddTournament from './Component/AddTournament';
import EditTournament from './Component/EditTournament';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllTournament} />
        <Route exact path="/add" component={AddTournament} />
        <Route exact path="/edit/:id" component={EditTournament} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
