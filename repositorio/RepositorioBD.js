// repositorioBD.js
const bd = require('../bd/bd_utils.js'); // esse deve ser seu utilitário de banco

module.exports = {
  listarPerguntas: async () => {
    const perguntas = await bd.todos('SELECT * FROM perguntas');
    return perguntas;
  },

  obterPerguntaPorId: async (id) => {
    const pergunta = await bd.um('SELECT * FROM perguntas WHERE id = ?', [id]);
    return pergunta;
  },

  adicionarPergunta: async (pergunta) => {
    await bd.run('INSERT INTO perguntas (titulo, descricao) VALUES (?, ?)', [pergunta.titulo, pergunta.descricao]);
  },

  removerPergunta: async (id) => {
    await bd.run('DELETE FROM perguntas WHERE id = ?', [id]);
  }
};