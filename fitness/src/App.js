import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './Layout/Navbar';
import { Home } from './Layout/Home';
import { Client } from './Client/Client'
import { Manager } from './Manager/Manager'
import { Trainer } from './Trainer/Trainer'
import { Login } from './Login/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Fitness app</h1>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/client" element={<Client />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
