import MyProfile from "../Pages/Dashboard/MyProfile"
import Myorders from "../Pages/Dashboard/PrivatePages/Myorders"
import MyHistory from "../Pages/Dashboard/PrivatePages/MyHistory"
import MyReviews from "../Pages/Dashboard/PrivatePages/MyReviews"

const PrivateRoutes = [
    { name: "myOrders",   path: "/dashboard",   Component: MyProfile },
    { name: "myOrders",   path: "/dashboard/my-history",   Component: MyHistory },
    { name: "myOrders",   path: "/dashboard/review",   Component: MyReviews },
    { name: "myOrders",   path: "/dashboard/my-orders",   Component: Myorders }
]

export default PrivateRoutes