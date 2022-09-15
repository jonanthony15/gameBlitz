import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import Test from './Components/Test';
import Test2 from './Components/Test2';
import SharedLayout from './Components/SharedLayout';
import SharedProductLayout from './Components/SharedProductLayout';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Switch>
    //     <Route path="/" component={Home} exact />
    //     <Route path="/products" component={Products} />
    //     <Route path="/test" component={Test} />
    //     <Route path="/test2" component={Test2} />
    //   </Switch>
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
