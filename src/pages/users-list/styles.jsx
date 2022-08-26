import styled from "styled-components";
import Background from "../../assets/background1.webp";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerUser = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  padding: 12px;
  margin-bottom: 16px;
`;

export const Label = styled.p`
  letter-spacing: -0.408px;

  color: #eeeeee;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;
`;

export const UserInfo = styled.div`
  width: 370px;
  padding-left: 25px;
  min-height: 58px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContainerAction = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    background: transparent;
    border: none;
    outline: none;
    font-size: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
`;
