import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/auth/Login";
import Signup from './pages/auth/Signup';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import BoxCreate from './pages/BoxCreate';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/profile" element={ <Profile />} />
        <Route path="/profile/:id/edit" element={ <ProfileEdit />} />
        <Route path="/cajas" element={ <BoxCreate />} />
      </Routes>
    </div>
  );
}

export default App;
