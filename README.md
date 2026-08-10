# Silveira Software — Site 3D (v2)

Site institucional reconstruído com hero 3D cinematográfico (Three.js), scroll reveal, cursor customizado e cards com tilt 3D. Site estático — sem build step, sem dependências de npm.

Conteúdo (projetos, stack, clientes, contato) replicado 1:1 do site atual em produção (silveira-software.vercel.app).

## Rodar local

Basta abrir `index.html` no navegador, ou servir a pasta:

```
npx serve .
```

## Deploy no Vercel (2 minutos)

**Opção A — Drag & drop (mais rápido):**
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Arraste a pasta `silveira-software-3d` inteira pra área de upload
3. Deploy — pronto, é site estático, o Vercel detecta sozinho

**Opção B — Via GitHub (recomendado pra manter histórico):**
1. Crie um repo novo (ou substitua o conteúdo do repo `LandingPage`)
2. Suba os arquivos desta pasta (`index.html`, `css/`, `js/`, `README.md`)
3. Conecte o repo no Vercel (New Project → Import) — deploy automático a cada push

## Estrutura

```
index.html     — marcação + conteúdo das seções
css/style.css  — tema cinematográfico (preto + gradiente cyan/violeta), animações
js/data.js     — projetos, serviços e clientes (dados reais do site atual)
js/scene.js    — cena 3D do hero e do contato (Three.js r128, via CDN)
js/main.js     — loader, cursor customizado, scroll reveal, filtros, contadores
```

## Observações

- Fontes: Google Fonts (Space Grotesk + Inter)
- Three.js / GSAP carregados via cdnjs (CDN público, sem instalação)
- Não depende de Node/npm — funciona direto no navegador
- Pra integrar de volta ao projeto Next.js original, dá pra portar cada seção do `index.html`
  pra um componente React equivalente (Hero, About, TechStack, Projects, ClientSites, Contact) —
  me chama que eu ajudo a fazer essa migração também.

## O que eu não consegui fazer neste ambiente

- Não tenho acesso de push ao seu GitHub nem deploy direto no seu Vercel a partir daqui —
  esse ambiente sandbox não tem client git nem token do Vercel configurado. Por isso o
  deploy final é manual (2 passos acima).
