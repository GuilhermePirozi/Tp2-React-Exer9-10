import React, { useState, useEffect } from 'react';

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
          }
          return response.json();
        })
        .then(data => setProdutos(data))
        .catch(err => setError(err.message));
    }, []);
  
    if (error) {
      return <div>Erro: {error}</div>;
    }
  
    return (
      <div>
        <h1>Produtos</h1>
        <ul>
          {produtos.map(produtos => (
            <li key={produtos.id}>
              <h2>{produtos.title}</h2>
              <p>{produtos.description}</p>
              <p>Preço: ${produtos.price}</p>
              <img src={produtos.image} alt={produtos.title} width={100} />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Produtos;
  