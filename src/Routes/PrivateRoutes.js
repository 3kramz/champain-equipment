import MyAdderss from "../Pages/Dashboard/MyAddress/MyAdderss"
import Myorders from "../Pages/Dashboard/PrivatePages/Myorders"
import MyHistory from "../Pages/Dashboard/PrivatePages/MyHistory"
import MyReviews from "../Pages/Dashboard/PrivatePages/MyReviews"

const PrivateRoutes = [
    { name: "MyAdderss",  path: "/dashboard",                   Component: MyAdderss },
    { name: "myOrders",   path: "/dashboard/my-orders",         Component: MyHistory },
    { name: "myOrders",   path: "/dashboard/track-order",       Component: MyReviews },
    { name: "myOrders",   path: "/dashboard/account-details",   Component: Myorders }
]

export default PrivateRoutes