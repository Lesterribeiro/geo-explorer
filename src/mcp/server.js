const dataService = require('../services/dataService');

// Simulação de Interface do Servidor MCP para o ecossistema IBM Bob / AI
const mcpServer = {
  name: "geo-explorer-mcp",
  version: "1.0.0",
  tools: {
    get_track: (args) => dataService.getTrack(args.technology),
    generate_challenge: (args) => dataService.getChallenge(args.technology, args.level),
    generate_certificate: (args) => dataService.createCertificate(args.studentName, args.technology)
  }
};

module.exports = mcpServer;
