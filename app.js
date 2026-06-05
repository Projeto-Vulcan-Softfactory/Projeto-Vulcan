const verificarTemperatura = require('./sensores.js');
const verificarMotor = require('./motor.js');

// Dados de teste da temperatura
const temperatura = [0, 100, 150, 200, 180];
const dadoDaTemperatura = verificarTemperatura(temperatura);

// Dados de teste do motor
const velocidadeAtual = 100;
const aceleracao = 15;
const dadosDoMotor = verificarMotor(velocidadeAtual, aceleracao);

// Painel de Telemetria
console.log("=== PAINEL DE TELEMETRIA ===");
console.log("");

console.log("MOTOR");
console.log("Velocidade Final:", dadosDoMotor.velocidadeFinal);
console.log("Status:", dadosDoMotor.status);

console.log("");

console.log("SENSORES");
console.log("Temperaturas:", temperatura);
console.log("Resfriamento:", dadoDaTemperatura);

console.log("");
console.log("=== FIM DO RELATÓRIO ===");
