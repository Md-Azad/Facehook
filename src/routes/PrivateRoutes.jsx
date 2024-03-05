import { useAuth } from "../hooks/useAuth";
import { Navigate,Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider.jsx";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  
  return (
    <>
      {auth.authToken ? (
        <>
        <ProfileProvider>
        <Header />
        <main className="mx-auto max-w-[1020px] py-8">
          <div className="container">
            
            <Outlet></Outlet>
          </div>
        </main>
        </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" replace={true} />
        
      )}
    </>
  );
};

export default PrivateRoutes;
