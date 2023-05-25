import { useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const ModalContainer = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const ModalWindow = styled.div`
  position: relative;
  box-sizing: border-box;
  box-shadow: 0px 0px 12px 8px rbga(0, 0, 0, 0.4);
  border-radius: 8px;
  width: 720px;
  max-width: 720px;
  height: 540px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  padding: 32px 16px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;
export default function Modal({ visible, children, setVisible }) {
  const clickOutside = (event) => {
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalContainer visible={visible} tabIndex={-1} onClick={clickOutside}>
        <ModalWindow tabIndex={0}>{children}</ModalWindow>
      </ModalContainer>
    </>
  );
}
