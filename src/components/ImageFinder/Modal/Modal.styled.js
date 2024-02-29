import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #000c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
`;
export const ModalWrap = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: #000;
  img {
    max-height: calc(100vh - 24px);
  }
`;
