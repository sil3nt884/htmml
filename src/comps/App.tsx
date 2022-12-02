

import {FormEvent} from "react";
import {Login} from './Login'
import { Contacts } from "./Contacts";
import './Login.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element:  <Login></Login>,
        },
        {
            path : "/contacts",
            element : <Contacts contacts={[{name: "hello"}]}></Contacts>
        }
    ]);


    return <div>
        <RouterProvider router={router} />
    </div>
}
