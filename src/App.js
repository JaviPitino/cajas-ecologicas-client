import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Login from "./pages/auth/Login";
import Signup from './pages/auth/Signup';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';
import BoxCreate from './pages/boxes/BoxCreate';
import FoodsList from './pages/food/FoodsList';

// components
import Navbar from './components/Navbar';

//auth
import IsPrivate from './components/IsPrivate';
import FarmerBoxes from './pages/FarmerBoxes';
import BoxDetails from './pages/boxes/BoxDetails';
import BoxEdit from './pages/boxes/BoxEdit';

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
        <Route path="/cajas/create" element={ <IsPrivate> <BoxCreate /> </IsPrivate>} />
        <Route path='/cajas/:id/details' element={ <BoxDetails />} />
        <Route path='/cajas/:id/edit' element={ < BoxEdit/> } />
        <Route path='/:id/cajas' element={<FarmerBoxes />} />
        <Route path="/alimentos" element={ <IsPrivate><FoodsList /></IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
