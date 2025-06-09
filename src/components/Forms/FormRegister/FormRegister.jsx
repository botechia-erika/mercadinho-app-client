import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormRegisterContainer } from './styled.FormRegister';
import { URLAPI } from '../../../common/constants/URLAPI';
import { useForm } from '../../../hooks/useForm';
import { UserMessage } from '../../Message/UserMesssage/UserMessage';
import { handleClub } from '../../../router/coordinator';
import { useNavigate } from 'react-router-dom';

export  function FormRegister() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]); // Ensure that users is initialized as an array
  const [viewMessage, setViewMessage] = useState(0);


  // Utilizando o hook personalizado useForm para gerenciar o estado do formulário
  const { formState, handleInputChange, handleResetForm } = useForm({
    id: null,
    fullName:null,
    nickname: null,
    email: null, 
    password: null,
    avatar: 'https://i.postimg.cc/43N2NMwR/marketlogo.png',
    role: 'Cadastrado',
  });

  const {
    id,
    fullName,
    nickname,
    password,
    email,
    avatar,
    role
  } = formState;

  const handleCreateUser = async (event) => {
    event.preventDefault();

    const body = { ...formState };

    try {
      const response = await axios.post(`${URLAPI}users`, body, {
        headers: {
          Authorization: 'botechia-erika',
        },
      });
      localStorage.setItem('token', response.data.token)
      handleClub(navigate)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    // Atualizar a lista de usuários ao montar o componente
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${URLAPI}users`); // Use axios.get instead of fetch
        setUsers(response.data.result);
      } catch (error) {
        console.error('Erro ao buscar usuários', error);
      }
    };

    fetchUsers();
  }, []);

/*
  useEffect(() => {
    // Verificar se há usuários com o mesmo nome completo
    const userWithSameFullName = users.find((user) => user.fullName === fullName);
    setViewMessage(userWithSameFullName ? 2 : 0);
  }, [fullName, users]);

  useEffect(() => {
    // Verificar se há usuários com o mesmo nickname
    const nicknameIn = nickname;
    const userWithSameNickname = users.find((user) => user.nickname === nicknameIn);
    setViewMessage(userWithSameNickname ? 2 : 0);
  }, [nickname, users]);

  useEffect(() => {
    // Verificar se há usuários com o mesmo email
    const userWithSameEmail = users.find(
      (user) => user.email.toLowerCase().trim() === email.toLowerCase().trim()
    );
    setViewMessage(userWithSameEmail ? 2 : 0);
  }, [email, users]);

  useEffect(() => {
    console.log('useEffect called for password');
  }, [password]);*/

  return (
    <FormRegisterContainer>
      <h2>CLUB de DESCONTOS</h2>
      <p>Cadastro de novos usuários</p>
      <form>
        <input
          type="text"
          name="id"
          placeholder="CPF ou CNPJ"
          id="id"
          required
          value={id}
          onChange={handleInputChange}
          pattern={/^((\d{3}\.\d{3}\.\d{3}-\d{2})|(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}))$/}
        />

        {viewMessage === 2 && <UserMessage />}
        <input
          type="text"
          name="fullName"
          placeholder="nome de cadastro"
          id="fullName"
          required
          value={fullName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="nickname"
          placeholder="nome de usuário"
          id="nickname"
          required
          value={nickname}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email do usuário"
          id="email"
          required
          value={email}
          onChange={handleInputChange}
          pattern={/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i}
          title={'e-mail deve ser único e válido'}
        />
        <input
          type="password"
          name="password"
          placeholder="senha do usuário"
          id="password"
          required
          value={password}
          onChange={handleInputChange}
          pattern={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!])[0-9a-zA-Z$*&@#]{8,}$/}
          title={'8 a 12 caracteres com pelo menos 1 letra maiúscula, 1 número e 1 caractere especial como $*&@#!'}
        />
        <button type="submit" onClick={handleCreateUser}>
          Cadastrar
        </button>
        <button type="reset" className='resetBtn' onClick={handleResetForm}>
          RESETEAR DADOS
        </button>
      </form>
    </FormRegisterContainer>
  );
}
