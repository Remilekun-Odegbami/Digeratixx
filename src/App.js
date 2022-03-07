import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/main-pages/Home';
import About from '../src/pages/nav-pages/About';
import Login from '../src/pages/validation/Login';
import Signup from '../src/pages/validation/Signup';
import Blog from './pages/main-pages/Blog';
import Error from './pages/main-pages/Error';

const App = () => {
  // const {isLoggedIn, setIsLoggedIn} = useState(false)
  return (
    <Router>
      <Header />
      {/* <Login /> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/blog" element={<Blog />} />


      
      <Route exact path="*" element={<Error />} />
    </Routes>
    <Footer />
    </Router>
  );
};

export default App;