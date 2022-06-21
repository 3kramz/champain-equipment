import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'


const PublicRoutes = [
    { name: "home",   path: "/",   Component: Home },
    { name: "home",   path: "/home",   Component: Home },
    { name: "login",  path: "/login",  Component: Login },
    { name: "signup",  path: "/signup",  Component: Signup },
]

export default PublicRoutes