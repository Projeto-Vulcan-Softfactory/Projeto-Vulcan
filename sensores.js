function sensores (numeros) {    
    
    let soma = 0    
    let media = 0    
    let resfriamento    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    
    media = soma / numeros.length;    
    
    if (media >= 155){        
        console.log("Resfriamento ativo, média: ", media)        
        return resfriamento = true    
    }    
    else {        
        console.log("Resfriamento inativo, média: ", media)        
        return resfriamento = false    
    }
}

module.exports = sensores


 // =============== Codigo com comentários de explicação ===============


 // Função que recebe um array de números (temperaturas/leituras dos sensores), calcula a média aritmética e define se o sistema de resfriamento deve ser ativado.
function sensores (numeros) {    
    
    // Inicializa as variáveis para armazenar a soma total e a média calculada
    let soma = 0    
    let media = 0    
    let resfriamento // Variável que guarda o estado do resfriamento se é (true/false)
    
    // Laço de repetição (for) que percorre cada elemento do array 'numeros'
    for (let i = 0; i < numeros.length; i++) {
        // Adiciona o valor do número atual ao total acumulado na variável 'soma'
        soma += numeros[i];
    }
    
    // Calcula a média dividindo a soma total pela quantidade de elementos no array
    media = soma / numeros.length;    
    
    // Estrutura condicional para verificar se a média atingiu o limite crítico de 155
    if (media >= 155){        
        // Exibe uma mensagem de alerta no console indicando que o sistema de resfriamento foi ligado
        console.log("Resfriamento ativo, média: ", media)        
        
        // Atribui 'true' à variável e encerra a função retornando este valor
        return resfriamento = true    
    }    
    else {        
        // Exibe uma mensagem no console indicando que a temperatura está segura
        console.log("Resfriamento inativo, média: ", media)        
        
        // Atribui 'false' à variável e encerra a função retornando este valor
        return resfriamento = false    
    }
}

// Exporta a função para que ela possa ser utilizada (importada) em outros arquivos do projeto
module.exports = sensores
