import '../css/main.css';
import { useDispatch } from "react-redux";
import argentBankLogo from '../img/argentBankLogo.png';
import { logoutSuccess } from "../actions/authActions";

const Navbar = ({ username }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      // dispatch logout success action
      dispatch(logoutSuccess());
    } catch (error) {
      console.error("Error during logout:", error);
    }
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
      <div>
      <div className="username-header">
      <p>{username} ! </p>
    </div>
        <button className="logout-button" onClick={handleLogout}>
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
