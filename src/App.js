import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './Components/Navbar';
import AdminRoutes from './Routes/AdminRoutes';
import PublicRoutes from './Routes/PublicRoutes';
import { PrivateRoutes, privateUserRoutes } from './Routes/PrivateRoutes';
import RequireUser from './Authentication/RequireUser';
import RequireAdmin from './Authentication/RequireAdmin';
import Dashboard2 from './Pages/Dashboard/Dashboard2';
import Loading from './Components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, setUserRole, setUserBillingInfo, setUserShipingInfo } from './Redux/Actions/userActions';
import { setTools } from './Redux/Actions/toolsActions';
import { setCart } from './Redux/Actions/cartActions';
import { useEffect } from 'react';
import httpLink from './ServerLink/serverLink';

function App() {
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const role = useSelector(state => state.role);

  useEffect(() => {
    fetch(`${httpLink}/tools`).then(res => res.json()).then(data => dispatch(setTools(data))).catch(err => console.log(err))
    fetch(`${httpLink}/cart/${user?.email}`).then(res => res.json()).then(data => dispatch(setCart(data.cart))).catch(err => console.log(err))
    fetch(`${httpLink}/user/${user?.email}`).then(res => res.json()).then(data => {
      dispatch(setUserBillingInfo(data.bill))
      dispatch(setUserShipingInfo(data.shipping))
      dispatch(setUserRole(data.role))
    }).catch(err => console.log(err))
  }, [user, dispatch])



  if (loading) { return <Loading /> }
  dispatch(setUserInfo(user));
  return (
    <div className=" bg-white" >
      <Navbar />

      <Routes>
        {/* ----------------------------   Public routes  ------------------------------------------ */}
        {PublicRoutes.map(({ Component, path ,name}) => <Route key={name} element={<Component />} path={path} />)}

        <Route path="/dashboard" element={<Dashboard2 />}>

          {/* -----------------------------  Admin dashboard routes  ------------------------------------------ */}
          {role === "admin" && AdminRoutes?.map(({ path, Component, name }) => <Route key={name} path={`${path}`} element={<RequireAdmin>< Component /></RequireAdmin>} />)}

          {/* -----------------------------  Private dashboard routes  ------------------------------------------ */}
          {role === "user" && PrivateRoutes?.map(({ path, Component, name }) => <Route key={name} path={`${path}`} element={<RequireUser>< Component /></RequireUser>} />)}
        </Route>
        {/* -----------------------------  Private routes------------------------------------------ */}
        {role === "user" && privateUserRoutes?.map(({ path, Component,name }) => <Route key={name} path={`${path}`} element={<RequireUser>< Component /></RequireUser>} />)}
      </Routes>
    </div>
  );
}

export default App;
