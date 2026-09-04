const dataService = require('../src/services/dataService');

function runTests() {
  console.log("Iniciando bateria de testes automatizados...");

  // Teste 1: Busca de Trilha
  const track = dataService.getTrack("Python");
  console.assert(track.technology === "Python", "Teste 1 Falhou: Trilha não encontrada.");

  // Teste 2: Geração de Desafio
  const challenge = dataService.getChallenge("Python", "Iniciante");
  console.assert(challenge !== null, "Teste 2 Falhou: Desafio não gerado.");

  // Teste 3: Emissão de Certificado
  const cert = dataService.createCertificate("Aluno", "Python");
  console.assert(cert.status === "Emitido com Sucesso", "Teste 3 Falhou: Certificado não emitido.");

  console.log("Todos os testes foram executados com sucesso!");
}

runTests();
