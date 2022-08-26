import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { api } from "../../service/api";

import Button from "../../components/button";
import ContainerItens from "../../components/container items";
import { H1 } from "../../components/title/styles";
import { Container, InputLabel, Input, ContainerInput } from "./styles";

export const UserControler = () => {
  const { state } = useLocation();
  const history = useHistory();
  const [firstname, setFirstname] = useState(state?.firstname || "");
  const [lastname, setLastname] = useState(state?.lastname || "");
  const [username, setUsername] = useState(state?.username || "");
  const [phone, setPhone] = useState(state?.phone || "");
  const [email, setEmail] = useState(state?.email || "");
  const [address, setAddress] = useState(state?.address || "");
  const [city, setCity] = useState(state?.city || "");
  const [cep, setCep] = useState(state?.cep || "");

  async function addNewUser() {
    await api.post("/users", {
      firstname,
      lastname,
      username,
      phone,
      email,
      city,
      cep,
      address,
    });

    navigateUsers();
  }
  async function editUser() {
    await api.put(`/user/${state.id}`, {
      firstname,
      lastname,
      username,
      phone,
      email,
      city,
      cep,
      address,
    });

    navigateUsers();
  }

  function navigateUsers() {
    history.push("/users");
  }

  return (
    <Container>
      <ContainerItens>
        <H1> Cadastro de Usuários </H1>
        <ContainerInput>
          <div>
            <InputLabel>Nome</InputLabel>
            <Input
              value={firstname}
              placeholder="Name"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <InputLabel>Sobrenome</InputLabel>
            <Input
              value={lastname}
              placeholder="Sobrenome"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </ContainerInput>

        <ContainerInput>
          <div>
            <InputLabel>Usuários</InputLabel>
            <Input
              value={username}
              placeholder="Usuário"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <InputLabel>Telefone</InputLabel>
            <Input
              value={phone}
              placeholder="Telefone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </ContainerInput>

        <ContainerInput>
          <div>
            <InputLabel>Email</InputLabel>
            <Input
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <InputLabel>Endereço</InputLabel>
            <Input
              value={address}
              placeholder="Endereço"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </ContainerInput>
        <ContainerInput>
          <div>
            <InputLabel>Cidade</InputLabel>
            <Input
              value={city}
              placeholder="Cidade"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <InputLabel>Cep</InputLabel>
            <Input
              value={cep}
              placeholder="Cep"
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
        </ContainerInput>
        {state ? (
          <Button onClick={editUser}>Editar Usuário</Button>
        ) : (
          <Button onClick={addNewUser}>Registrar</Button>
        )}

        <Button primary onClick={navigateUsers}>
          Ver Usuários
        </Button>
      </ContainerItens>
    </Container>
  );
};
