import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      localStorage.clear("SELECTED_MEALPLAN");
      localStorage.clear("ACTIVE_PROFILE");
      navigate("/");
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

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
          {auth?.currentUser?.uid ? (
            <div className="dashboard-logout">
              <Link className="ld-link" to="/dashboard">
                Dashboard
              </Link>
              <Link onClick={handleLogout} className="sl-link">
                Logout
              </Link>
            </div>
          ) : (
            <div className="login-signup">
              <Link className="ld-link" to="/login">
                Login
              </Link>
              <Link className="sl-link" to="/signup">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
