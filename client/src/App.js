import { Route, Switch } from 'react-router';
import './App.scss';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import Test from './Components/Test';
import Test2 from './Components/Test2';;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products} />
        <Route path="/test" component={Test} />
        <Route path="/test2" component={Test2} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
