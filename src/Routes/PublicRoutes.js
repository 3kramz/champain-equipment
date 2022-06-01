import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'


const PrivateRoutes = [
    { name: "home",   path: "/",   Component: Home },
    { name: "home",   path: "/home",   Component: Home },
    { name: "login",  path: "/login",  Component: Login },
]

export default PrivateRoutes