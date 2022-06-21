import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRoutes from './Routes/AdminRoutes';
import Navbar from './Components/Navbar';
import PublicRoutes from './Routes/PublicRoutes';
import Dashboard from './Pages/Dashboard/Dashboard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useRole from './Role/useRole';
import Loading from './Components/Loading';

function App() {

  const [user, loading] = useAuthState(auth);
  const role = useRole(user?.email)
  if (loading) { return <Loading /> }

  return (
    <div className=" bg-white" >
      <Navbar />

      {<Routes>

        {PublicRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}


        <Route path="/dashboard" element={<Dashboard />}>
          {role==="admin"?
          AdminRoutes?.map(({path, Component} )=> <Route path={`/dashboard/${path}`} element={< Component/>} /> )
          :
          PublicRoutes?.map(({path, Component} )=> <Route path={`/dashboard/${path}`} element={< Component/>} /> )

           }
          

        </Route>

      </Routes>}

    </div>
  );
}

export default App;
