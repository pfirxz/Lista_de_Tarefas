import React, { useState } from "react";

const Tarefa = ({ tarefa, onEditar, onExcluir }) => {
  const [editMode, setEditMode] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState(tarefa.texto);

  const handleEditar = () => {
    setEditMode(!editMode);
  };

  const handleSalvarEdicao = () => {
    onEditar(tarefa.id, novaTarefa);
    setEditMode(false);
  };

  return (
    <li>
      {editMode ? (
        <div>
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <button onClick={handleSalvarEdicao}>Salvar</button>
        </div>
      ) : (
        <div>
          {tarefa.texto}
          <button onClick={handleEditar}>Editar</button>
          <button onClick={() => onExcluir(tarefa.id)}>Excluir</button>
        </div>
      )}
    </li>
  );
};

export default Tarefa;
