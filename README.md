# Projeto Vulcan - SoftFactory

## 1. Equipe

### 1.1 Módulo Motor (motor.js)

* Levi
* Bruno
* Ricardo

Responsáveis pelo desenvolvimento da função de controle do braço robótico, cálculo da velocidade final, definição dos dados de teste do motor e verificação dos estados "Sistema Seguro" e "ALERTA DE SOBRECARGA".

### 1.2 Módulo Sensores (sensores.js)

* Rafael
* Otávio
* Éder

Responsáveis pelo desenvolvimento da função de monitoramento térmico, processamento das leituras de temperatura, cálculo da média térmica e verificação da necessidade de ativação do sistema de resfriamento.

### 2. Integração do Sistema (app.js)

Desenvolvido de forma colaborativa pela equipe para integrar os módulos do motor e dos sensores, realizar os testes e exibir o painel de telemetria no terminal.

## 3. Descrição do Projeto

O Projeto Vulcan tem como objetivo simular o gerenciamento de uma frota de robôs industriais utilizados em linhas de montagem automatizadas da SoftFactory.

O sistema monitora informações importantes dos robôs, como velocidade e temperatura, permitindo identificar situações de operação segura ou possíveis riscos de sobrecarga e superaquecimento.

O projeto foi desenvolvido de forma colaborativa utilizando Git, GitHub e autenticação SSH, simulando um ambiente real de desenvolvimento de software.

## 4. Funcionalidades

### 4.1 Módulo motor.js

* Receber a velocidade atual e através disto analisa a aceleração do braço robótico.
* Realiza o calculo da velocidade final.
* Retorna:

  * Sistema Seguro
  * ALERTA DE SOBRECARGA

### 4.2 Módulo sensores.js

* Recebe um array com 5 leituras de temperatura.
* Calcula a média térmica utilizando um laço `for`.
* Informa se é necessário ativar o sistema de resfriamento.

### 4.3 Módulo app.js

* Importa os módulos utilizando `require()`.
* Define dados de teste.
* Exibe um painel de telemetria no terminal.

## 5. Tecnologias Utilizadas

* JavaScript (Node.js)
* Git
* GitHub
* SSH
* Markdown

## 6. Estrutura do Projeto

projeto-vulcan-softfactory/

├── motor.js
├── sensores.js
├── app.js
└── README.md

## 7. Como Executar

```bash
git clone https://github.com/SEU-USUARIO/projeto-vulcan-softfactory.git
cd projeto-vulcan-softfactory
node app.js
```
