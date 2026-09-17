import { NavBar } from './components/nav_bar/NavBar.tsx';
import { Routes, Route, Outlet } from 'react-router-dom';
import { LandingPage } from './components/LandingPage.tsx';
import { Register } from './components/register/Register.tsx';
import { Login } from './components/login/Login.tsx';
const MainLayout = () => {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route> 
      <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;