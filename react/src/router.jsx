import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import AddressCheck from "./views/AddressCheck";
import Thankyou from "./views/Thankyou";
import Address from "./views/Address";
import PersonalDetails from "./views/PersonalDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Login />,
            },

            {
                path: "/login",
                element: <PersonalDetails />,
            },
        ],
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/address/:id",
                element: <Address />,
            },
            {
                path: "/Address-check",
                element: <AddressCheck />,
            },
            {
                path: "/thankyou",
                element: <Thankyou />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
