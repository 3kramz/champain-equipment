import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';
import auth from '../firebase.init';
import useRole from '../hooks/useRole';


const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [role, load] = useRole(user);

    if (loading || load)  return <Loading />
    if (role !== "user") return <Navigate to="/login" state={{ from: location }} replace />

    return children;
};

export default PrivateRoute;