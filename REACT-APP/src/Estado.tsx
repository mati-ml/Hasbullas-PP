import React, { useState } from 'react';
import axios from 'axios';

const Estado = () => {
  const [columnValue, setColumnValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = '123'; // Reemplazar con el ID real
    const columnName = 'evaluacion'; // Reemplazar con el nombre real de la columna

    try {
      const response = await axios.get(`https://your-api-url/get_column_value?id=${id}&columna=${columnName}`);
      const { data } = response;
      setColumnValue(data.valor);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Obtener valor de columna</h1>

      <form onSubmit={handleSubmit}>
        <label>ID de Eval:</label>
        <input type="text" value={id} onChange={(event) => setId(event.target.value)} />

        <label>Nombre de la columna:</label>
        <input type="text" value={columnName} onChange={(event) => setColumnName(event.target.value)} />

        <button type="submit">Obtener valor</button>
      </form>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {columnValue && <div>Valor de la columna: {columnValue}</div>}
    </div>
  );
};

export default Estado;
