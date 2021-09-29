---
title: "Login Wordpress com E-mail de usuário"
date: "2012-09-23"
tags: [Wordpres]
description: "Efetuando login no wordpress como E-mail no campo de usuário"
author:
  twitter: "dudulira"
  name: "Eduardo Lira"
---

Caso você esqueça seu usuário de acesso administrativo Wordpress, habilite o acesso com o endereço de E-mail no campo de usuário. Para isso, bastar adicionar o código condicional abaixo no arquivo`functions.php` do tema. O arquivo encontra-se dentro do diretório do tema. Por exemplo, neste caminho: `wp-content/themes/nomedotema/functions.php`

```php?start_inline=1
function login_with_email_address($username) {
$user = get_user_by_email($username);

if(!empty($user->user_login)){
$username = $user->user_login;
return $username;
}
}
add_action('wp_authenticate','login_with_email_address');
```

Em caso de dúvidas, deixe seu comentário.
Abraços!