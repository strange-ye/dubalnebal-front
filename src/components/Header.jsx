import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}
