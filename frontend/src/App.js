import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ToyBox from './components/ToyBox';
import { Switch, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
    <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/toybox" component={ToyBox} />
       </Switch>

    
    <Footer />
    </div>
  );
}

export default App;
