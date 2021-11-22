import { NavLink } from "react-router-dom";
import { Client } from '../Client/Client'
import { Manager } from '../Manager/Manager'
import { Trainer } from '../Trainer/Trainer'

export function Navbar() {
    return (
        <nav>
            <NavLink to="/home" >
                Home
            </NavLink>
            <NavLink to="client" >
                Client
            </NavLink>
            <NavLink to="trainer" >
                Trainer
            </NavLink>
            <NavLink to="manager" >
                Manager
            </NavLink>

            {/* <NavLink to="/usestatewithobject" >
                useStateWithObject
            </NavLink>
            <NavLink to="/usereducerdemo" >
                useReducerDemo
            </NavLink>
            <NavLink to="/usereducerwithpayload" >
                useReducerWithPayload
            </NavLink> */}
        </nav>
    );
}
