import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";
import BoxCreate from "./pages/boxes/BoxCreate";
import FoodsList from "./pages/food/FoodsList";
import BoxDetails from "./pages/boxes/BoxDetails";
import BoxEdit from "./pages/boxes/BoxEdit";
import FoodDetails from "./pages/food/FoodDetails";
import FoodCreate from "./pages/food/FoodCreate";
import ClientView from "./pages/client/ClientView";
import FarmerBoxes from "./pages/farmer/FarmerBoxes";
import Farmer from "./pages/farmer/Farmer";
import InfoBoxes from "./pages/InfoNologin/InfoBoxes";

//Errors
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"

// components
import NavbarTop from "./components/NavbarTop";

//auth
import IsPrivate from "./components/IsPrivate";
import IsFarmer from "./components/IsFarmer";
import IsClient from "./components/IsClient";

function App() {
  return (
    <div className="App">
      <NavbarTop />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Autorización */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Perfil */}
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
        <Route path="/profile/:id/edit" element={<ProfileEdit />} />
        {/* Cajas */}
        <Route path="/cajas/create" element={<IsPrivate> <IsFarmer><BoxCreate /></IsFarmer> </IsPrivate>} />
        <Route path="/cajas/:id" element={<BoxDetails />} />
        <Route path="/cajas/:id/edit" element={<IsPrivate> <IsFarmer><BoxEdit /></IsFarmer> </IsPrivate>} />
        {/* Agricultor */}
        <Route path="/agricultor" element={<IsPrivate> <IsFarmer><Farmer /></IsFarmer> </IsPrivate>} />
        <Route path="/agricultores/:id/cajas" element={<IsPrivate><FarmerBoxes /></IsPrivate>} /> 
        <Route path="/alimentos/create" element={<IsPrivate><IsFarmer><FoodCreate /></IsFarmer> </IsPrivate>} />
        {/*  Clientes */}
        <Route path="/cliente" element={<IsPrivate><IsClient><ClientView /></IsClient></IsPrivate>} />
        {/* Acceso sin credenciales */}
        <Route path="/alimentos" element={<FoodsList />} />
        <Route path="/alimentos/:id" element={<FoodDetails />} />
        <Route path="/infocajas" element={<InfoBoxes />} />
        <Route path="/error" element={<Error />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
