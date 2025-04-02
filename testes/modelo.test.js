const modelo = require('../modelo');
const repositorioMemoria = require('../repositorio/RepositorioMemoria');

beforeEach(() => {
  repositorioMemoria.limpar(); 
  modelo.reconfig_repositorio(repositorioMemoria);
});

test('Testando banco de dados vazio', async () => {
  const perguntas = await modelo.listar_perguntas();
  expect(perguntas.length).toBe(0);
});

test('Testando cadastro de três perguntas', async () => {
  await modelo.cadastrar_pergunta('1 + 1 = ?');
  await modelo.cadastrar_pergunta('2 + 2 = ?');
  await modelo.cadastrar_pergunta('3 + 3 = ?');

  const perguntas = await modelo.listar_perguntas();

  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('1 + 1 = ?');
  expect(perguntas[1].texto).toBe('2 + 2 = ?');
  expect(perguntas[2].num_respostas).toBe(0);
  expect(perguntas[1].id_pergunta).toBe(perguntas[2].id_pergunta - 1);
});