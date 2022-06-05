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
import BoxDetails from './pages/boxes/BoxDetails';
import BoxEdit from './pages/boxes/BoxEdit';
import FoodDetails from './pages/food/FoodDetails';
import FoodCreate from './pages/food/FoodCreate';
import ClientView from './pages/client/ClientView';
import FarmerBoxes from './pages/farmer/FarmerBoxes';

// components
import NavbarTop from './components/NavbarTop';

//auth
import IsPrivate from './components/IsPrivate';
import Farmer from './pages/farmer/Farmer';



function App() {
  return (
    <div className="App">
      <NavbarTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/profile" element={ <Profile />} />
        <Route path="/profile/:id/edit" element={ <ProfileEdit />} />
        <Route path="/cajas/create" element={ <BoxCreate /> } />
        <Route path='/cajas/:id' element={ <BoxDetails />} />
        <Route path='/cajas/:id/edit' element={ < BoxEdit/> } />
        <Route path='/agricultor' element={<Farmer />} />
        <Route path='/:id' element={<FarmerBoxes />} /> {/*  PARA ACCEDER LOS CLIENTES */}
        <Route path="/alimentos" element={ <FoodsList />} />
        <Route path='/alimentos/create' element={<FoodCreate />} />
        <Route path='/alimentos/:id' element={< FoodDetails/>} />
        <Route path='/cliente' element={<ClientView />} />
      </Routes>
    </div>
  );
}

export default App;
