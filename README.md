# Projeto Vulcan - SoftFactory

## Equipe

### Módulo Motor (motor.js)

* Levi
* Bruno
* Ricardo

Responsáveis pelo desenvolvimento da função de controle do braço robótico, cálculo da velocidade final, definição dos dados de teste do motor e verificação dos estados "Sistema Seguro" e "ALERTA DE SOBRECARGA".

### Módulo Sensores (sensores.js)

* Rafael
* Otávio
* Éder

Responsáveis pelo desenvolvimento da função de monitoramento térmico, processamento das leituras de temperatura, cálculo da média térmica e verificação da necessidade de ativação do sistema de resfriamento.

### Integração do Sistema (app.js)

Desenvolvido de forma colaborativa pela equipe para integrar os módulos do motor e dos sensores, realizar os testes e exibir o painel de telemetria no terminal.

## Descrição do Projeto

O Projeto Vulcan tem como objetivo simular o gerenciamento de uma frota de robôs industriais utilizados em linhas de montagem automatizadas da SoftFactory.

O sistema monitora informações importantes dos robôs, como velocidade e temperatura, permitindo identificar situações de operação segura ou possíveis riscos de sobrecarga e superaquecimento.

O projeto foi desenvolvido de forma colaborativa utilizando Git, GitHub e autenticação SSH, simulando um ambiente real de desenvolvimento de software.

## Funcionalidades

### Módulo motor.js

* Recebe a velocidade atual e a aceleração do braço robótico.
* Calcula a velocidade final.
* Retorna:

  * Sistema Seguro
  * ALERTA DE SOBRECARGA

### Módulo sensores.js

* Recebe um array com 5 leituras de temperatura.
* Calcula a média térmica utilizando um laço `for`.
* Informa se é necessário ativar o sistema de resfriamento.

### Módulo app.js

* Importa os módulos utilizando `require()`.
* Define dados de teste.
* Exibe um painel de telemetria no terminal.

## Tecnologias Utilizadas

* JavaScript (Node.js)
* Git
* GitHub
* SSH
* Markdown

## Estrutura do Projeto

projeto-vulcan-softfactory/

├── motor.js
├── sensores.js
├── app.js
└── README.md

## Como Executar

```bash
git clone https://github.com/SEU-USUARIO/projeto-vulcan-softfactory.git
cd projeto-vulcan-softfactory
node app.js
```
