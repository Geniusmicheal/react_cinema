import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceContextState_ from './components/context/Service';
import Header from './components/layout/Header';
import Alert from './components/layout/Alert';
import Home from './components/pages/home/Home';
import SingleItem from './components/pages/SingleItem';
import About from './components/pages/About';
import Notfound from './components/pages/Notfound';
import './App.css';

function App() {

  
   return (
      <ServiceContextState_>
      <Router>
         
            <div className="App">
               <Header/>
               <div className="container">
                  <Alert/>
                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route exact path='/about' component={About} />
                     <Route exact path='/film/:code' component={SingleItem} />
                     <Route component={Notfound} />
                  </Switch>

                  
               </div>
            </div>
         

      </Router>
</ServiceContextState_>
   );

}

export default App;

