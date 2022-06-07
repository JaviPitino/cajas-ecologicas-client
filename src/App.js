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
import BoxesByFarmer from "./pages/boxes/BoxesByFarmer";

//Errors
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"

// components
import NavbarTop from "./components/NavbarTop";

//auth
import IsPrivate from "./components/IsPrivate";
import ClientBoxes from "./pages/client/ClientBoxes";
import TheRol from "./components/TheRol";


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
        <Route path="/cajas/create" element={<IsPrivate> <TheRol><BoxCreate /></TheRol> </IsPrivate>} />
        <Route path="/cajas/:id" element={<BoxDetails />} />
        <Route path="/cajas/:id/edit" element={<IsPrivate> <TheRol><BoxEdit /></TheRol> </IsPrivate>} />
        {/* Agricultor */}
        <Route path="/agricultor" element={<IsPrivate> <TheRol><Farmer /></TheRol> </IsPrivate>} />
        <Route path="/cajas" element={<IsPrivate><FarmerBoxes /></IsPrivate>} /> 
        <Route path="/alimentos/create" element={<IsPrivate><TheRol><FoodCreate /></TheRol> </IsPrivate>} />
        {/*  Clientes */}
        <Route path="/cliente" element={<IsPrivate><TheRol><ClientView /></TheRol></IsPrivate>} />
        <Route path="/:id/cliente" element={<IsPrivate><TheRol><ClientBoxes /></TheRol></IsPrivate>} />
        <Route path="/:id/cajas" element={<IsPrivate><TheRol><BoxesByFarmer /></TheRol></IsPrivate>} />
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
