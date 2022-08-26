import styled from "styled-components";
import Background from "..//../Assets/background1.webp";

//importo a imagem

export const Container = styled.div`
  // imagens
  background: url("${Background}");
  background-size: cover; //quando quero que cubra toda a área
  display: flex; // vai um do lado do outro
  flex-direction: column; //vai um p baixo do outro
  align-items: center; // mexe no eixo secundário
  gap: 40px; // espaçamento
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;

  color: #eeeeee;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 370px;
  padding-left: 25px;
  margin-bottom: 25px;
  min-height: 58px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;
