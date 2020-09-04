import Axios from 'axios';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {});

  async function postIt() {
    await Axios.post('http://localhost:8080/produtos/', {
      nome: 'kuat',
      descricao: 'refrigerante de guaraná 2L',
      preco: 7.0,
      categoria_id: 2,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <h2>
      <button onClick={() => postIt()}>Pesquisar</button>
    </h2>
  );
};

export default Home;
