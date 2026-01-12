# Cinemática Avançada com IA - Deployment Guide

Este projeto está pronto para ser publicado no **Vercel**.

## Como fazer o Deploy:

1.  **Via Vercel Dashboard (Recomendado):**
    *   Cria um novo repositório no teu **GitHub**.
    *   Faz o upload de todos os ficheiros desta pasta para o repositório.
    *   No site da [Vercel](https://vercel.com/), clica em "Add New" -> "Project".
    *   Importa o repositório que acabaste de criar.
    *   Clica em **Deploy**. A Vercel detetará automaticamente que se trata de um site estático.

2.  **Via Vercel CLI:**
    *   Instala a CLI: `npm i -g vercel`
    *   Na pasta do projeto, corre: `vercel`
    *   Segue as instruções no terminal.

## Notas:
*   Todos os assets (imagens e logótipo) foram movidos para a pasta `/assets` com caminhos relativos, garantindo que o site funcione perfeitamente em qualquer servidor.
*   Ficheiros principais: `index.html`, `style.css`, `main.js`.
