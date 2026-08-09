# 🤖 PAC Bot Geral

Bot Discord dedicado ao assistente inteligente, logs externos, comandos Trucky e funcionalidades gerais da **Portugal Alfa Community**.

## Funcionalidades

- 🤖 Assistente Inteligente — respostas automáticas com FAQ e IA (Pollinations/Gemini)
- 🪞 Logs Externos — servidor mirror com logs de mensagens, membros, canais, cargos, bans
- 🚛 Comandos Trucky — estatísticas VTC, verificação de inatividade, patentes, mapa
- 🎨 Gerador de Imagens — fotos de membros e patentes PAT
- 🗺️ Mapa da Frota — canal dedicado com atualização automática

## Variáveis de Ambiente

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `TOKEN` | Token do bot Discord | ✅ |
| `CLIENT_ID` | ID da aplicação Discord | ✅ |
| `TRUCKY_ACCESS_TOKEN` | Token API do Trucky | ❌ |
| `TRUCKY_COMPANY_ID` | ID da empresa Trucky | ❌ |
| `GEMINI_API_KEY` | API key Gemini AI | ❌ |
| `SERPER_API_KEY` | API key para pesquisas | ❌ |
| `SUPABASE_URL` | URL do Supabase | ❌ |
| `SUPABASE_ANON_KEY` | Key do Supabase | ❌ |
| `PORT` | Porta do servidor web | ❌ |

## Deploy no Render

- **Build Command:** `npm install`
- **Start Command:** `npm start`

## Comandos

- `/ajuda` — Central de ajuda inteligente
- `/status` — Status do bot
- `/verificar-inatividade` — Verifica membros inativos (Staff)
- `/minhas-cargas` — Estatísticas pessoais Trucky
- `/estatisticas-vtc` — Estatísticas da VTC
- `/atualizar-patentes` — Atualiza cargos por KM (Staff)
- `/mapa` — Mapa da frota
- `/gerar-foto` — Gera foto de membro PAT
- `/minha-foto` — Gera foto automática com dados Trucky
- `/gerar-patente` — Gera imagem de patente
- `/mapa-canal` — Ativa mapa num canal (Staff)
