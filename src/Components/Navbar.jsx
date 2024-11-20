import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

export const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img className="logo-image" src={logo} alt="Logo" />
                </div>

                <div className="nav-container">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" to="/about-us">
                        About us
                    </Link>
                    <Link className="nav-link" to="/contacts">
                        Contacts
                    </Link>
                </div>
                <div className="navbar-login-links">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
            </div>
        </header>
    );
};
