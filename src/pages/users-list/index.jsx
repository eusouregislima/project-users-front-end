import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { useHistory } from "react-router-dom";

import Button from "../../components/button";
import ContainerItens from "../../components/container items";
import { H1 } from "../../components/title/styles";
import {
  Container,
  Label,
  UserInfo,
  ContainerUser,
  ContainerAction,
} from "./styles";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get("/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await api.delete(`/user/${userId}`);

    const newListUser = users.filter((user) => user.id !== userId);

    setUsers(newListUser);
  }

  function registerNewUser() {
    history.push("/");
  }
  function editUser(user) {
    history.push({ pathname: "/", state: user });
  }
  return (
    <Container>
      <ContainerItens>
        <H1> Usuários </H1>

        {users.map((user) => (
          <ContainerUser key={user.id}>
            <UserInfo>
              <Label>{`Nome: ${user.firstname} ${user.lastname}`}</Label>
              <Label>{`Email: ${user.email}`}</Label>
              <Label>{`Usuário: ${user.username}`}</Label>
            </UserInfo>
            <UserInfo>
              <Label>{`Telefone: ${user.phone}`}</Label>
              <Label>
                {`Endereço: ${user.address} 
                    `}
              </Label>
              <Label>
                {`Cep: ${user.cep} 
                    ${user.city}`}
              </Label>
            </UserInfo>
            <ContainerAction>
              <button onClick={() => deleteUser(user.id)}>
                <i className="bx bx-trash"></i>
              </button>
              <button onClick={() => editUser(user)}>
                <i className="bx bx-edit-alt"></i>
              </button>
            </ContainerAction>
          </ContainerUser>
        ))}

        <Button onClick={registerNewUser}>Cadastrar Usuários</Button>
      </ContainerItens>
    </Container>
  );
};
