import "../css/main.css";
import { useDispatch } from "react-redux";
import argentBankLogo from "../img/argentBankLogo.png";
import exitLogo from "../img/icon_exit.png";
import loginLogo from "../img/icon-login.png";
import userLogo from "../img/icon_user.png";

import { logoutUser } from "../actions/authActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state.user;
  });

  console.log(user);

  const isAuthenticated = useSelector((state) => {
    return state.isAuthenticated;
  });

  const handleLogout = async () => {
    try {
      // dispatch logout success action
      dispatch(logoutUser());
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="nav-right">
        {isAuthenticated && user && (
          <div className="username-header">
            <img src={userLogo} width={32} alt="sign out" /> {user.firstName}
          </div>
        )}
        {isAuthenticated ? (
          <div className="logout-button" onClick={handleLogout}>
            <img src={exitLogo} width={18} alt="sign out" /> Sign out
          </div>
        ) : (
          <div className="login-button" onClick={handleLogin}>
            <img src={loginLogo} width={18} alt="sign in" /> Sign in
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
