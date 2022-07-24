import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './Components/Navbar';
import AdminRoutes from './Routes/AdminRoutes';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoute from './Routes/PrivateRoutes';
import RequireUser from './Authentication/RequireUser';
import RequireAdmin from './Authentication/RequireAdmin';
import Dashboard2 from './Pages/Dashboard/Dashboard2';
import Loading from './Components/Loading';
import { useDispatch } from 'react-redux';
import { setUserInfo, setUserRole } from './Redux/Actions/userActions';
import useRole from './hooks/useRole';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);

  const [role] = useRole(user);
  
  useEffect(() => {
    dispatch(setUserRole(role));
    dispatch(setUserInfo(user));
  }, [role, user, dispatch])


  if (loading) { return <Loading /> }
  return (
    <div className=" bg-white" >
      <Navbar />

      <Routes>
        {/* -----------------------------Public routes------------------------------------------ */}
        {PublicRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}

        <Route path="/dashboard" element={<Dashboard2 />}>

          {/* -----------------------------Admin routes------------------------------------------ */}
          {role === "admin" && AdminRoutes?.map(({ path, Component }) => <Route path={`${path}`} element={<RequireAdmin>< Component /></RequireAdmin>} />)}

          {/* -----------------------------Private routes------------------------------------------ */}
          {role === "user" && PrivateRoute?.map(({ path, Component }) => <Route path={`${path}`} element={<RequireUser>< Component /></RequireUser>} />)}

        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
