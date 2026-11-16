# andreroddev.github.io

Site público da ByMi Games (GitHub Pages). Publica-se sozinho a cada envio para `main`.

## Estrutura
- `index.html` — página principal com a lista de jogos.
- `assets/site.css` e `assets/lang.js` — estilo e troca de língua (PT/EN), comuns a todas as páginas.
- `<jogo>/index.html` — página de cada jogo; `<jogo>/privacy.html` — a política de privacidade desse jogo; `<jogo>/img/` — imagens.
- `404.html` — página de erro.
- `googled2da7b6f6052290c.html` — prova ao Google (Search Console) de que o site é nosso. Não é segredo: o Google pede que fique público na raiz. **Não apagar**: sem ele cai a verificação do domínio (usada na marca do "Entrar com Google").
- `spireborn/auth.html` — página de regresso do "Entrar com Google" (botão "Voltar ao jogo"); o endereço está na lista do Supabase.
- `spireborn/img/` — `icon*.png` (ícone) e uma pasta por língua (`pt/`, `en/`): capturas do jogo (`torre`, `cartas`, `boss`, `360`, `montanha`, `salao`, `escada`, `laboratorio`) e as da loja com legenda (`loja-*`).

## O que nunca vai para aqui
O repositório é público: nada de chaves, palavras-passe, ficheiros do jogo, dados de jogadores nem capturas com nomes ou emails de pessoas. O único contacto publicado é o email de suporte (o mesmo da Play Store).

## Juntar um jogo novo
1. Copiar a pasta `spireborn/` para `<novo-jogo>/` e mudar textos e imagens (ícone 256×256, capa 1024×500, capturas com 540 de largura em `img/pt/` e `img/en/`).
2. Em `index.html`, copiar o bloco `<a class="game" href="spireborn/">…</a>` e mudar o link, as imagens e os textos. Tirar o cartão "Próximo jogo em breve" se já não fizer sentido.
3. Cada jogo precisa da sua própria `privacy.html` (a Play Store pede um endereço por app).

## Textos em duas línguas
Cada texto aparece duas vezes, com `lang="pt"` e `lang="en"`; o `assets/lang.js` mostra só a língua escolhida (a do browser, ou a que o visitante escolher no botão).

## Spireborn
A política original está no repositório do jogo, em `docs/store/privacy.html`. Se mudar lá, copiar para `spireborn/privacy.html` e enviar.
