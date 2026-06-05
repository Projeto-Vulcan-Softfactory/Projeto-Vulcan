const verificarTemperatura = require('./sensores.js');

const temperatura = [0, 100, 150, 200, 180];

const dadoDaTemperatura = verificarTemperatura(temperatura);

const verificarMotor = require('./motor.js');

const velocidadeAtual = 100 
const aceleracao = 15

const dadosDoMotor = verificarMotor(velocidadeAtual, aceleracao)