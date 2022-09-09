import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Eventhandling from './components/Eventhandling';
import Todo from './components/Todo';
import Register from './components/Register';
import Product from './components/Product';
import UserManager from './components/UserManager';
import { Toaster } from 'react-hot-toast';





function App() {
  return (
    <div>
      <Toaster position='top-right'/>
      {/* <header className="App-header">
        <h1>Shivani Tiwari</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <home/>
      <login/> */}
      {/* <NotFound/> */}

      <BrowserRouter >
        <Header />
        {/* < a href ='/home'>Home</a>
      < a href ='/login'>Login</a> after refresh its change in multiple page 
      //  */}
        {/* //  <Link to="/home">Home</Link>
      //  <Link to="/login">Login</Link> */}
        <Routes>
          <Route element={<Home></Home>} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<Eventhandling />} path="event" />
          <Route element={<Todo />} path="todo" />
          <Route element={<Register />} path="register" />
          <Route element={<Product />} path="product" />
          <Route element={<UserManager />} path="usermanager" />



          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
