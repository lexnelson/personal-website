import { Switch, Route } from "react-router-dom"
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/' >
        <Home />
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
