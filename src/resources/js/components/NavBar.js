import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul className="nav">
                <Link to="/">
                    <li className="ml-2">Top</li>
                </Link>
                <Link to="/users">
                    <li className="ml-2">Users</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;
