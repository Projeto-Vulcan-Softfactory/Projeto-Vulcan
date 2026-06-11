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


 // =============== Codigo com comentários de explicação ===============


// Importação dos módulos de monitoramento (funções externas)
const verificarTemperatura = require('./sensores.js');
const verificarMotor = require('./motor.js');

// --- SEÇÃO DE SENSORES (TEMPERATURA) ---
// Array simulando o histórico ou leituras atuais de temperatura coletadas pelos sensores
const temperatura = [0, 100, 150, 200, 180];

// Processa a lista de temperaturas e retorna o status do sistema de resfriamento
const dadoDaTemperatura = verificarTemperatura(temperatura);


// --- SEÇÃO DO MOTOR ---
// Definição das variáveis físicas atuais do motor para o teste
const velocidadeAtual = 100;
const aceleracao = 15;

// Processa os dados físicos e retorna um objeto com a velocidade final calculada e o status do motor
const dadosDoMotor = verificarMotor(velocidadeAtual, aceleracao);


// --- EXIBIÇÃO DOS RESULTADOS (PAINEL DE TELEMETRIA) ---
console.log("=== PAINEL DE TELEMETRIA ===");
console.log(""); // Linha em branco para melhor legibilidade no console

// Exibe os dados processados do motor
console.log("== MOTOR ==");
console.log("Velocidade Final:", dadosDoMotor.velocidadeFinal); // Exibe o resultado do cálculo de velocidade
console.log("Status:", dadosDoMotor.status);                 // Exibe a situação do motor (ex: "Normal", "Alerta")

console.log("");

// Exibe os dados processados dos sensores de temperatura
console.log("== SENSORES ==");
console.log("Temperaturas:", temperatura);         // Exibe o histórico de temperaturas fornecido
console.log("Resfriamento:", dadoDaTemperatura);  // Exibe o diagnóstico do sistema de resfriamento

console.log("");
console.log("=== FIM DO RELATÓRIO ===");
