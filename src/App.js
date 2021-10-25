import { Switch, Route } from "react-router-dom"
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
      
      <Route exact path='/' >
      <Navbar />
        <Home />
        <Footer/>
      </Route>
      <Route exact path='/about'>
      <Navbar />
        <About/>
        <Footer/>
      </Route>
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
