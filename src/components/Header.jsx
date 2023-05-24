import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f2f4f5;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  padding: 0 64px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 64px;
`;

const LeftNavigation = styled.ul`
  display: flex;
  flex-direction: row;

  gap: 32px;
`;

const HeaderLogo = styled.div`
  /* padding: 8px 16px; */
`;

const HeaderRight = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

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
          <HeaderLogo>DubalNebal</HeaderLogo>
        </Link>
        <LeftNavigation>
          <li>
            <Link to={"/board"}>Board</Link>
          </li>
          <li>
            <Link to={"/party"}>Party</Link>
          </li>
        </LeftNavigation>
      </HeaderLeft>
      <HeaderRight>
        <li>
          {isLoggedIn ? (
            <Nav onClick={logout}>logout</Nav>
          ) : (
            <Link to={"/login"}>
              <LoginButton>Login</LoginButton>
            </Link>
          )}
        </li>
        <li>
          {isLoggedIn ? (
            <Nav onClick={profile}>프로필</Nav>
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
