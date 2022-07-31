import MyAdderss from "../Pages/Dashboard/MyAddress/MyAdderss"
import MyReviews from "../Pages/Dashboard/PrivatePages/MyReviews"
import MyCart from "../Pages/MyCart/MyCart"
import Checkout from "../Pages/Checkout/Checkout"
import MyOrders from "../Pages/Dashboard/PrivatePages/MyOrder/MyOrders"

export const PrivateRoutes = [
    { name: "MyAdderss",  path: "/dashboard",                   Component: MyAdderss },
    { name: "myOrders",   path: "/dashboard/track-order",       Component: MyReviews },
    { name: "myOrders",   path: "/dashboard/my-orders",         Component: MyOrders }
]

export const privateUserRoutes=[
    { name: "MyAdderss",  path: "/cart",                 Component:MyCart },
    { name: "checkout",  path: "/checkout",              Component: Checkout},

]