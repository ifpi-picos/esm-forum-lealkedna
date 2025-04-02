// repositorioMemoria.js

let perguntas = [];

module.exports = {
  listarPerguntas: async () => {
    return perguntas.map(p => ({
      ...p,
      num_respostas: 0 
    }));
  },

  adicionarPergunta: async (texto, id_usuario) => {
    const nova = {
      id_pergunta: perguntas.length + 1,
      texto,
      id_usuario
    };
    perguntas.push(nova);
  },

  adicionarResposta: async (id_pergunta, texto) => {
    
  },

  getPergunta: async (id_pergunta) => {
    return perguntas.find(p => p.id_pergunta === id_pergunta);
  },

  getRespostas: async (id_pergunta) => {
    return []; 
  },

  getNumeroDeRespostas: async (id_pergunta) => {
    return 0; 
  },

  limpar: () => {
    perguntas = []; 
  }
};