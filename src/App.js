import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dhashboard from './components/Dhashboard/Dhashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound404 from './components/NotFound404/NotFound404';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/dhashboard' element={<Dhashboard></Dhashboard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/*' element={<NotFound404></NotFound404>}></Route>
    </Routes>
    </div>
  );
}

export default App;
