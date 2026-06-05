# Projeto-Vulcfunction

function verificarMotor(velocidadeAtual, aceleracao) {
    let velocidadeFinal = velocidadeAtual + aceleracao;

    if (velocidadeFinal > 100) {
        return {
            velocidadeFinal: velocidadeFinal,
            status: "ALERTA DE SOBRECARGA"
        };
    } else {
        return {
            velocidadeFinal: velocidadeFinal,
            status: "Sistema Seguro"
        };
    }
}

module.exports = verificarMotor;
