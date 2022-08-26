import styled from "styled-components";

export const Button = styled.button`
  border-radius: 14px;
  width: 342px;
  min-height: 74px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${(props) => (props.secondary ? "white" : "black")};
  background-color: ${(props) => (props.secondary ? "black" : "")};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
