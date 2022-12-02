import {Login} from './Login'
import { Contacts } from "./Contacts";
import './Login.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export const App = () => {

    const contacts = [{name: "HTML"}, {name: "CSS"}, {name: "Test"}, {name: "Test"}]

    const router = createBrowserRouter([
        {
            path: "/",
            element:  <Login></Login>,
        },
        {
            path : "/contacts",
            element : <Contacts contacts={contacts}></Contacts>
        }
    ]);


    return <div>
        <RouterProvider router={router} />
    </div>
}
