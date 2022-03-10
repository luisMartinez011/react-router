import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ContactMe from "./pages/ContactMe"
import Error from "./pages/Error"
import SingleProject from "./pages/SingleProject"

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Projects/:id' element={<ContactMe/>}></Route>
      <Route path='/ContactMe' element={<ContactMe/>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
