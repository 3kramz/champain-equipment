import AddProducts from '../Pages/Dashboard/AdminPages/AddProducts';
import AllOrders from '../Pages/Dashboard/AdminPages/AllOrders';
import Products from '../Pages/Dashboard/AdminPages/Products';
import Users from '../Pages/Dashboard/AdminPages/Users';
import MyAdderss from '../Pages/Dashboard/MyAddress/MyAdderss';

const AdminRoutes = [
    { name: "myOrders",   path: "/dashboard",   Component: MyAdderss },
    { name: "myOrders",   path: "/dashboard/add-products",  Component: AddProducts },
    { name: "myOrders",   path: "/dashboard/all-orders",   Component: AllOrders },
    { name: "myOrders",   path: "/dashboard/all-products",     Component: Products },
    { name: "myOrders",   path: "/dashboard/all-users",         Component: Users },
]



export default AdminRoutes
