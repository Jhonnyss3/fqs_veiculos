# CLAUDE.md

Diretrizes para colaboração com Claude Code neste projeto.

---

## Idioma e Comunicação

- Sempre responder em portugues (pt-BR).
- Ser direto e objetivo, sem enrolação.
- Explicar o "por que" de decisões técnicas somente quando solicitado.
- Nunca usar emojis.
- Ao responder com passo a passo, enviar somente 1 passo por vez e aguardar comando para o próximo.

---

## Estilo de Código

- Incluir comentários apenas onde a lógica não for autoevidente (identificação de classes, objetos, funções complexas).
- Nunca adicionar docstrings, type annotations ou comentários em código que não foi alterado.
- Não adicionar tratamento de erros ou validações para cenários que não existem no escopo atual.
- Preferir editar arquivos existentes a criar novos.
- Não criar arquivos de documentação (*.md) salvo quando explicitamente solicitado.

---

## Comportamento Geral

- Nunca fazer mais do que foi pedido. Sem refatorações ou melhorias não solicitadas.
- Não usar abstrações ou utilitários para operações pontuais.
- Não criar compatibilidade retroativa desnecessária.
- Soluções devem ter o mínimo de complexidade necessária para a tarefa atual.
- Confirmar antes de executar ações destrutivas ou irreversíveis (delete de arquivos, reset de banco, force push, etc).

---

## Git

- Somente criar commits quando explicitamente solicitado.
- Nunca usar --no-verify ou pular hooks.
- Nunca fazer force push para main/master sem confirmação explícita.
- Sempre criar commits novos, nunca amend sem instrução direta.
- Mensagem de commit: concisa, focada no "por que", em portugues.

---

## Segurança

- Nunca introduzir vulnerabilidades como SQL injection, XSS, command injection ou outras do OWASP Top 10.
- Nunca commitar arquivos sensíveis (.env, credenciais, chaves).
- Validar entrada somente nas bordas do sistema (input do usuário, APIs externas).