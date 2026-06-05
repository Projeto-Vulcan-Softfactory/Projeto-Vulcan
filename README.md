# Projeto Vulcan - SoftFactory

## Equipe

- Integrante A (Líder) - Responsável pelo arquivo `motor.js`
- Integrante B - Responsável pelo arquivo `sensores.js`
- Integrante C - Responsável pelo arquivo `app.js`

---

## Descrição do Projeto

O Projeto Vulcan tem como objetivo simular o gerenciamento de uma frota de robôs industriais utilizados em linhas de montagem automatizadas da SoftFactory.

O sistema monitora informações importantes dos robôs, como velocidade e temperatura, permitindo identificar situações de operação segura ou possíveis riscos de sobrecarga e superaquecimento.

O projeto foi desenvolvido de forma colaborativa utilizando Git e GitHub, simulando um ambiente real de desenvolvimento de software.

---

## Funcionalidades

### Módulo `motor.js`

- Recebe a velocidade atual e a aceleração do braço robótico.
- Calcula a velocidade final.
- Retorna:
  - **Sistema Seguro**
  - **ALERTA DE SOBRECARGA**

### Módulo `sensores.js`

- Recebe um array com 5 leituras de temperatura.
- Calcula a média térmica utilizando um laço `for`.
- Informa se é necessário ativar o sistema de resfriamento.

### Módulo `app.js`

- Importa os módulos utilizando `require()`.
- Define dados de teste.
- Exibe um painel de telemetria no terminal.

---

## Tecnologias Utilizadas

- JavaScript (Node.js)
- Git
- GitHub
- SSH
- Markdown

---

## Estrutura do Projeto

```text
projeto-vulcan-softfactory/
│
├── motor.js
├── sensores.js
├── app.js
└── README.md
