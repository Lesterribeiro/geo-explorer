const fs = require('fs');
const path = require('path');

class DataService {
  constructor() {
    const dataPath = path.join(__dirname, '../../data/tracks.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    this.database = JSON.parse(rawData);
  }

  getTrack(technology) {
    const track = this.database.tracks.find(
      (t) => t.technology.toLowerCase() === technology.toLowerCase()
    );
    if (!track) {
      throw new Error(`Trilha para a tecnologia '${technology}' não foi encontrada.`);
    }
    return track;
  }

  getChallenge(technology, level) {
    const challenge = this.database.challenges.find(
      (c) => c.technology.toLowerCase() === technology.toLowerCase() &&
             c.level.toLowerCase() === level.toLowerCase()
    );
    if (!challenge) {
      throw new Error(`Desafio para '${technology}' no nível '${level}' não foi encontrado.`);
    }
    return challenge;
  }

  createCertificate(studentName, technology) {
    const track = this.getTrack(technology);
    return {
      certificateId: `CERT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      studentName: studentName,
      technology: track.technology,
      issueDate: new Date().toISOString().split('T')[0],
      status: "Emitido com Sucesso"
    };
  }
}

module.exports = new DataService();
