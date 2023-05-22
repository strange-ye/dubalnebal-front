import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const Root = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default Root;
