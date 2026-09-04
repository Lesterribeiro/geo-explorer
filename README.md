# Geo-Explorer

## Descrição do Projeto
O **Geo-Explorer** é uma solução voltada para exploração de trilhas de aprendizagem em tecnologia, geração de desafios de código e emissão de certificados fictícios de conclusão. O projeto foi arquitetado com suporte ao protocolo **MCP (Model Context Protocol)** para integração com assistentes de IA (IBM Bob).

## Estrutura do Repositório
- `data/`: Base de dados estruturada em formato JSON (`tracks.json`).
- `src/services/`: Camada de serviço de dados (`dataService.js`).
- `src/mcp/`: Interface do servidor MCP (`server.js`).
- `tests/`: Suíte de testes automatizados (`dataService.test.js`).

## Como Utilizar
Como o projeto está hospedado em ambiente estático de repositório, todos os scripts foram pré-validados para execução em ambientes Node.js com os comandos padrão `npm test` e `npm start`.

## Aprendizados do Desafio
- Estruturação modular de código sem dependência de IDEs locais.
- Formatação de dados em JSON e mapeamento de regras de negócio.
- Integração de ferramentas com suporte ao protocolo MCP.
