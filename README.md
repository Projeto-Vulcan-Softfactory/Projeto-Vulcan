# Projeto Vulcan - SoftFactory

> **Objetivo:** Simular o gerenciamento de uma frota de robôs industriais utilizados em linhas de montagem automatizadas da SoftFactory, monitorando informações críticas como velocidade e temperatura para garantir uma operação segura e eficiente.

---

## Descrição Geral

O Projeto Vulcan foi desenvolvido com o objetivo de simular um sistema de monitoramento para robôs industriais utilizados em ambientes automatizados.

O sistema acompanha informações importantes dos robôs, como velocidade e temperatura, permitindo identificar situações de operação segura e alertar sobre possíveis riscos de sobrecarga ou superaquecimento.

O projeto foi desenvolvido de forma colaborativa utilizando Git, GitHub e autenticação SSH, simulando um ambiente corporativo real de desenvolvimento de software.

---

## Tecnologias Utilizadas

* JavaScript (Node.js)
* Git
* GitHub
* SSH
* Markdown

---

## Estrutura do Projeto

```text
projeto-vulcan-softfactory/
│
├── motor.js
├── sensores.js
├── app.js
└── README.md
```

---

## Funcionalidades

### Módulo Motor (motor.js)

**Responsáveis:**

* Levi
* Bruno
* Ricardo

**Funções implementadas:**

* Recebe a velocidade atual do braço robótico.
* Recebe a aceleração aplicada.
* Calcula a velocidade final.
* Verifica as condições de operação.
* Retorna:

  * Sistema Seguro
  * ALERTA DE SOBRECARGA

---

### Módulo Sensores (sensores.js)

**Responsáveis:**

* Rafael
* Otávio
* Éder

**Funções implementadas:**

* Recebe um array contendo 5 leituras de temperatura.
* Calcula a média térmica utilizando um laço `for`.
* Analisa as condições do sistema.
* Informa se o sistema de resfriamento deve ser ativado.

---

### Aplicativo Principal (app.js)

**Responsáveis:**

* Levi
* Bruno
* Ricardo
* Rafael
* Otávio
* Éder

**Funções implementadas:**

* Integra os módulos `motor.js` e `sensores.js`.
* Importa funções utilizando `require()`.
* Define dados de teste para validação do sistema.
* Executa as verificações dos módulos.
* Exibe um painel completo de telemetria no terminal.

---

## Equipe de Desenvolvimento

| Integrante | Participação                                               |
| ---------- | ---------------------------------------------------------- |
| Levi       | Desenvolvimento do módulo Motor e integração do sistema    |
| Bruno      | Desenvolvimento do módulo Motor e integração do sistema    |
| Ricardo    | Desenvolvimento do módulo Motor e integração do sistema    |
| Rafael     | Desenvolvimento do módulo Sensores e integração do sistema |
| Otávio     | Desenvolvimento do módulo Sensores e integração do sistema |
| Éder       | Desenvolvimento do módulo Sensores e integração do sistema |

---

## Como Executar

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/projeto-vulcan-softfactory.git
```

### 2. Acessar a pasta do projeto

```bash
cd projeto-vulcan-softfactory
```

### 3. Executar a aplicação

```bash
node app.js
```

---

## Exemplo de Saída

```text
=== PAINEL DE TELEMETRIA ===

MOTOR
Velocidade Final: 115
Status: ALERTA DE SOBRECARGA

SENSORES
Temperaturas: [0, 100, 150, 200, 180]
Resfriamento: true

=== FIM DO RELATÓRIO ===
```
