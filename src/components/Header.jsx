import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../image/Logo.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(255, 251, 245);
  border-bottom: 1px solid black;
  box-sizing: border-box;
  padding: 0 216px;
  font-family: "omyu_pretty";
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 128px;
`;

const LeftNavigation = styled.ul`
  display: flex;
  flex-direction: row;

  gap: 96px;
`;

const HeaderLogo = styled.img`
  width: 64px;
`;

const HeaderRight = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 96px;

  font-size: 16px;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 16px;
  outline: 0;
  background-color: transparent;

  padding: 8px 16px;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  border: 1px solid #009fb6;
  border-radius: 16px;
  outline: 0;
  background-color: transparent;

  padding: 8px 16px;
  cursor: pointer;
`;

const Nav = styled.div`
  cursor: pointer;
`;

export default function Header() {
  const isLoggedIn = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const profile = () => {
    if (localStorage.getItem("access_token")) {
      navigate("/user/profile");
    }
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to={"/"}>
          <HeaderLogo src={Logo} />
        </Link>
        <LeftNavigation>
          <li>
            <Link to={"/board"}>Board</Link>
          </li>
          <li>
            <Link to={"/party"}>Party</Link>
          </li>
          <li>
            <Link to={"/Youtube"}>Youtube</Link>
          </li>
        </LeftNavigation>
      </HeaderLeft>
      <HeaderRight>
        <li>
          {isLoggedIn ? (
            <Nav onClick={logout}>Logout</Nav>
          ) : (
            <Link to={"/login"}>
              <LoginButton>Login</LoginButton>
            </Link>
          )}
        </li>
        <li>
          {isLoggedIn ? (
            <Nav onClick={profile}>Profile</Nav>
          ) : (
            <Link to={"/signup"}>
              <SignUpButton>Sign Up</SignUpButton>
            </Link>
          )}
        </li>
      </HeaderRight>
    </HeaderContainer>
  );
}
