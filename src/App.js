import './App.css';
import { Routes, Route } from 'react-router';
import Login from "./pages/auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/signup" element={ <Signup /> } /> */}
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
