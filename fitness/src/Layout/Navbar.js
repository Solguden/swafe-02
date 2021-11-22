import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <NavLink to="/home" >
                Home
            </NavLink>
            <NavLink to="/client" >
                Client
            </NavLink>
            <NavLink to="/trainer" >
                Trainer
            </NavLink>
            <NavLink to="/manager" >
                Manager
            </NavLink>
            <NavLink to="/login" >
                Login
            </NavLink>
        </nav>
    );
}
