// var bd = require('./bd/bd_utils.js');
// let repositorio = require('./repositorio/RepositorioBD.js')

// // usada pelo teste de unidade
// // para que o modelo passe a usar uma versão "mockada" de bd
// // function reconfig_bd(mock_bd) {
// //   bd = mock_bd;
// // }

// function reconfig_repositorio(novoRepositorio) {
//   repositorio = novoRepositorio;
// }

// // listar_perguntas retorna um array de objetos com os seguintes campos:
// // { id_pergunta: int
// //   texto: int
// //   id_usuario: int
// //   num_respostas: int 
// // }
// function listar_perguntas() {
//   // const perguntas = repositorio.queryAll('select * from perguntas', []);
//   // perguntas.forEach(pergunta => pergunta['num_respostas'] = get_num_respostas(pergunta['id_pergunta']));
//   // return perguntas;
//   const pergun

// }

// function cadastrar_pergunta(texto) {
//   const params = [texto, 1];
//   repositorio.exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?)', params);
// }

// function cadastrar_resposta(id_pergunta, texto) {
//   const params = [id_pergunta, texto];
//   repositorio.exec('INSERT INTO respostas (id_pergunta, texto) VALUES(?, ?)', params);
// }

// function get_pergunta(id_pergunta) {
//   return repositorio.query('select * from perguntas where id_pergunta = ?', [id_pergunta]);
// }

// function get_respostas(id_pergunta) {
//   return repositorio.queryAll('select * from respostas where id_pergunta = ?', [id_pergunta]);
// }

// function get_num_respostas(id_pergunta) {
//   const resultado = repositorio.query('select count(*) from respostas where id_pergunta = ?', [id_pergunta]);
//   return resultado['count(*)'];
// }

// // exports.reconfig_bd = reconfig_bd;
// exports.reconfig_repositorio = reconfig_repositorio;
// exports.listar_perguntas = listar_perguntas;
// exports.cadastrar_pergunta = cadastrar_pergunta;
// exports.cadastrar_resposta = cadastrar_resposta;
// exports.get_pergunta = get_pergunta;
// exports.get_respostas = get_respostas;
// exports.get_num_respostas = get_num_respostas;


var bd = require('./bd/bd_utils.js');
let repositorio = require('./repositorio/RepositorioBD.js');


function reconfig_repositorio(novoRepositorio) {
  repositorio = novoRepositorio;
}

async function listar_perguntas() {
  const perguntas = await repositorio.listarPerguntas();
  return perguntas;
}

async function cadastrar_pergunta(texto) {
  await repositorio.adicionarPergunta(texto, 1); // 1 = id do usuário fixo por enquanto
}

async function cadastrar_resposta(id_pergunta, texto) {
  await repositorio.adicionarResposta(id_pergunta, texto);
}

async function get_pergunta(id) {
  return await repositorio.getPergunta(id);
}

async function get_respostas(id) {
  return await repositorio.getRespostas(id);
}

async function get_num_respostas(id) {
  return await repositorio.getNumeroDeRespostas(id);
}

exports.reconfig_repositorio = reconfig_repositorio;
exports.listar_perguntas = listar_perguntas;
exports.cadastrar_pergunta = cadastrar_pergunta;
exports.cadastrar_resposta = cadastrar_resposta;
exports.get_pergunta = get_pergunta;
exports.get_respostas = get_respostas;
exports.get_num_respostas = get_num_respostas;