import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import PublicRoutes from './Routes/PublicRoutes';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {

  return (
    <div className=" " >
      <Navbar />
      
      {<Routes>

        {PublicRoutes.map(({ Component, path }) => <Route element={<Component />} path={path} />)}

       
       <Route path="/dashboard" element={<Dashboard />}/>
      
      </Routes>}

    </div>
  );
}

export default App;
