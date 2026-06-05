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