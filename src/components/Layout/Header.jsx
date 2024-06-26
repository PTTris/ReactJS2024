import { NavLink } from "react-router-dom";
import "./Layout.scss";
const Header = () => {
    return (
        <div className="header-container">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink to="/books">Books</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
