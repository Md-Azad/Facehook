import { useAuth } from "../hooks/useAuth";
import { Navigate,Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  
  return (
    <>
      {auth.user ? (
        <main className="mx-auto max-w-[1020px] py-8">
          <div className="container">
            <Header />
            <Outlet></Outlet>
          </div>
        </main>
      ) : (
        <Navigate to="/login" replace={true} />
        
      )}
    </>
  );
};

export default PrivateRoutes;