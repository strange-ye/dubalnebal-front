import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const isLoggedIn = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const profileChange = () => {
    if (localStorage.getItem("access_token")) {
      navigate("/update");
    }
  };

  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <div onClick={logout}>logout</div>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </li>
        <li>
          {isLoggedIn ? (
            <div onClick={profileChange}>프로필 변경</div>
          ) : (
            <Link to={"/signup"}>Sign Up</Link>
          )}
        </li>
      </ul>
    </div>
  );
}
