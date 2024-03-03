import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<ProfilePage />} path="/me" />
        
      </Route>
      
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/registration" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
