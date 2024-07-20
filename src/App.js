import './App.css';

import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Home/Navbar/Navbar';
import { Footer } from './components/Home/Footer/Footer';
function App() {


  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
