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
