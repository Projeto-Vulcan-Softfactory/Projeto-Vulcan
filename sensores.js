function sensores (numeros) {    
    
    let soma = 0    
    let media = 0    
    let resfriamento    
    for (let i = 0; i < temperatura.length; i++){        
        soma += temperatura[i]    
    }    
    media = soma / temperatura.length    
    
    if (media >= 155){        
        console.log("Resfriamento ativo")        
        return resfriamento = true    
    }    
    else {        
        console.log("Resfriamento inativo")        
        return resfriamento = false    
    }
}

module.exports = sensores