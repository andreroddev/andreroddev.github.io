# andreroddev.github.io

Site público dos jogos (GitHub Pages). Publica-se sozinho a cada envio para `main`.

## Estrutura
- `index.html` — página principal com a lista de jogos.
- `assets/site.css` e `assets/lang.js` — estilo e troca de língua (PT/EN), comuns a todas as páginas.
- `<jogo>/index.html` — página de cada jogo; `<jogo>/privacy.html` — a política de privacidade desse jogo; `<jogo>/img/` — imagens.
- `404.html` — página de erro.

## Juntar um jogo novo
1. Copiar a pasta `spireborn/` para `<novo-jogo>/` e mudar textos e imagens (ícone 256×256, capa 1024×500, capturas com 540 de largura).
2. Em `index.html`, copiar o bloco `<a class="game" href="spireborn/">…</a>` e mudar o link, as imagens e os textos. Tirar o cartão "Próximo jogo em breve" se já não fizer sentido.
3. Cada jogo precisa da sua própria `privacy.html` (a Play Store pede um endereço por app).

## Textos em duas línguas
Cada texto aparece duas vezes, com `lang="pt"` e `lang="en"`; o `assets/lang.js` mostra só a língua escolhida (a do browser, ou a que o visitante escolher no botão).

## Spireborn
A política original está no repositório do jogo, em `docs/store/privacy.html`. Se mudar lá, copiar para `spireborn/privacy.html` e enviar.
