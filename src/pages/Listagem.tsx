import React, { useEffect, useState } from 'react';

import MUIDataTable from "mui-datatables";

import PageMenu from '../components/PageMenu';
import { api } from '../services/api';

interface UserProps {
  name: {
    first: string,
    last: string
  };
  email: string;
  location: {
    city: string
  }
}

function Listagem() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/api/?results=100').then((res: any) => {
      let randomUsers = res.data.results;
      setUsers(randomUsers);
    });
  }, []);

  useEffect(() => {
    let storageListagemViews = localStorage.getItem('listagem-views');
    localStorage.setItem('listagem-views', String(Number(storageListagemViews) + 1));
  }, []);

  const columns = ["Nome Completo", "Email", "Cidade"];

  const data = users.map((user: UserProps) => {
    const userData = [
      `${user.name.first} ${user.name.last}`,
      user.email,
      user.location.city
    ];

    return userData;
  });

  return (
    <div>
      <PageMenu />

      <MUIDataTable 
        title={"Lista de Clientes"} 
        data={data} 
        columns={columns}
      />
    </div>
  );
}

export default Listagem;