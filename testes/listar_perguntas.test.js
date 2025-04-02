const modelo = require('../modelo');

const mockRepositorio = {
  listarPerguntas: jest.fn().mockResolvedValue([
    { id_pergunta: 1, texto: 'Qual a capital de MG?', id_usuario: 1, num_respostas: 5 },
    { id_pergunta: 2, texto: 'Qual a capital de RJ?', id_usuario: 1, num_respostas: 10 },
    { id_pergunta: 3, texto: 'Qual a capital de SP?', id_usuario: 1, num_respostas: 15 }
  ])
};

modelo.reconfig_repositorio(mockRepositorio);

test('Testando listar três perguntas', async () => {
  const perguntas = await modelo.listar_perguntas();
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');
  expect(perguntas[0].num_respostas).toBe(5);
  expect(perguntas[1].num_respostas).toBe(10);
  expect(perguntas[2].num_respostas).toBe(15);
});