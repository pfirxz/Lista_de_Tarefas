import React, { useState } from "react";
import Tarefa from "./Tarefa";

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([
        ...tarefas,
        {
          id: tarefas.length,
          texto: novaTarefa,
        },
      ]);
      setNovaTarefa("");
    }
  };

  const editarTarefa = (id, novoTexto) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, texto: novoTexto } : tarefa
    );
    setTarefas(novasTarefas);
  };

  const excluirTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        placeholder="Nova Tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            onEditar={editarTarefa}
            onExcluir={excluirTarefa}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
