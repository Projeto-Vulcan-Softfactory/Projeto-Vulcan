function verificarMotor(velocidadeAtual, aceleracao){

    let velocidadeFinal = velocidadeAtual + aceleracao

    if (velocidadeFinal > 100) {

        console.log("ALERTA DE SOBRECARGA")

        return {
            velocidadeFinal,
            status: "ALERTA DE SOBRECARGA"
        };
    } else {

        console.log("Sistema Seguro")

        return {
            velocidadeFinal,
            status: "Sistema Seguro"
        };
    }
}

module.exports = verificarMotor

// =============== Codigo com comentários de explicação ==============

// Verifica as condições do motor com base na velocidade e aceleração.
function verificarMotor(velocidadeAtual, aceleracao) {

    // Calcula a velocidade final somando a velocidade atual com a aceleração recebida
    let velocidadFinal = velocidadeAtual + aceleracao;

    // Estrutura de decisão: Avalia se a velocidade calculada ultrapassa o limite de segurança de 100
    if (velocidadFinal > 100) {
        
        // Caso ultrapasse, emite uma mensagem de aviso diretamente no console
        console.log("ALERTA DE SOBRECARGA");

        // Retorna um objeto com os dados para quem chamou a função
        return {
            velocidadFinal,                  // A velocidade final que causou a sobrecarga
            status: "ALERTA DE SOBRECARGA"   // O status indicando o perigo
        };
        
    } else {
        
        // Caso a velocidade esteja dentro do limite, emite uma mensagem de normalidade
        console.log("Sistema Seguro");

        // Retorna o objeto com o status de segurança
        return {
            velocidadFinal,              // A velocidade final calculada e segura
            status: "Sistema Seguro"     // O status indicando que está tudo bem
        };
    }
}

// Exporta a função para que ela possa ser utilizada em outros arquivos do projeto de painel de telemetria
module.exports = verificarMotor;
