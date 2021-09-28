---
title: Principais tabelas da instalação Wordpress
date: 2012-09-23
tags: ["Wordpress"]
description: "A principais tabelas de instalação no Wordpress"
categories: dev
author:
  twitter: "dudulira"
  name: "Eduardo Lira"
---

O wordpress possui 11 tabelas principais, como podemos ver no diagrama abaixo.

![](/assets/images/blog/wp4database.png)

Veremos para que cada uma delas serve.

- **wp_comments**: contém todos os comentários
- **wp_commentmeta**: metadados de comentário
- **wp_links** : contém os links adicionados e dados sobre os links
- **wp_options** : as opções do blog
- **wp_postmeta** : metadados das postagens
- **wp_posts**: conteúdos das postagens
- **wp_terms**: categorias e tags
- **wp_term_relationships** : associa categorias e tags às postagens
- **wptermtaxonomy**: descrições das categorias e tags
- **wp_usermeta** : metadados de usuário
- **wp_users** : todos os dados do usuário

Muitos erros que ocorrem no Wordpress podem ser tratados a partir do conhecimento das funções que cada tabela do banco exerce na aplicação.

Um link interessante está na documentação do CMS, nesta URL: [https://codex.wordpress.org/Database_Description](https://codex.wordpress.org/Database_Description).
Assim, é possível visualizar melhor o assunto tratado neste post.

Vlw! :wink:
