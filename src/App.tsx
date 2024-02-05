import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import MensProducts from './Components/MensProducts';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/checkout' Component={Checkout} />
        <Route path='/about' Component={About} />
        <Route path='/MensProducts' Component={MensProducts} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
