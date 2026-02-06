# 🎨 GUIA DE CUSTOMIZAÇÃO - TEMPLATE PREFEITURA

## 📖 Como Personalizar o Site para Sua Prefeitura

Este guia foi feito para **pessoas sem conhecimento técnico**. Você só precisa editar **1 arquivo** para mudar tudo!

---

## 📁 Arquivo a Editar

**Caminho:** `app/config/site-config.ts`

Abra este arquivo com qualquer editor de texto (Bloco de Notas, VS Code, Notepad++, etc.)

---

## ✏️ O QUE VOCÊ PODE CUSTOMIZAR

### 1️⃣ **Informações da Prefeitura**

```typescript
prefeitura: {
  nome: 'Prefeitura Municipal',      // ⬅️ EDITE: Nome da sua prefeitura
  cidade: 'São Paulo',                // ⬅️ EDITE: Nome da cidade
  estado: 'SP',                       // ⬅️ EDITE: Sigla do estado
  site: 'https://www.prefeitura.sp.gov.br',  // ⬅️ EDITE: Site oficial
  telefone: '(11) 156',               // ⬅️ EDITE: Telefone
  email: 'contato@prefeitura.sp.gov.br',     // ⬅️ EDITE: Email
},
```

**Exemplo prático:**
```typescript
prefeitura: {
  nome: 'Prefeitura de Campinas',
  cidade: 'Campinas',
  estado: 'SP',
  site: 'https://www.campinas.sp.gov.br',
  telefone: '(19) 2116-0156',
  email: 'atendimento@campinas.sp.gov.br',
},
```

---

### 2️⃣ **Cores do Site** 🎨

Use um **seletor de cores** online: https://htmlcolors.com/

```typescript
tema: {
  corPrincipal: '#61a229',           // ⬅️ Cor principal (botões, destaques)
  corPrincipalEscura: '#4e8221',     // ⬅️ Cor escura (hover)
  corSecundaria: '#009D59',          // ⬅️ Cor secundária (gradientes)
  corTextoEscuro: '#333333',         // ⬅️ Textos principais
  corTextoMedio: '#454545',          // ⬅️ Textos secundários
  corTextoClaro: '#b1a6a6',          // ⬅️ Textos claros/bordas
},
```

#### 🌈 Exemplos de Paletas de Cores:

**Verde (Padrão Estre):**
```typescript
corPrincipal: '#61a229'
corPrincipalEscura: '#4e8221'
corSecundaria: '#009D59'
```

**Azul:**
```typescript
corPrincipal: '#0066CC'
corPrincipalEscura: '#004C99'
corSecundaria: '#3399FF'
```

**Laranja:**
```typescript
corPrincipal: '#FF6B35'
corPrincipalEscura: '#CC5429'
corSecundaria: '#FF8C42'
```

**Vermelho:**
```typescript
corPrincipal: '#E63946'
corPrincipalEscura: '#C1121F'
corSecundaria: '#F07167'
```

**Roxo:**
```typescript
corPrincipal: '#7209B7'
corPrincipalEscura: '#560BAD'
corSecundaria: '#B5179E'
```

---

### 3️⃣ **Textos do Site** 📝

```typescript
textos: {
  tituloPrincipal: 'Consulta de Coleta de Lixo',    // ⬅️ Título grande
  descricao: 'Descubra os dias e horários...',       // ⬅️ Descrição
  placeholderBusca: 'Digite seu endereço...',        // ⬅️ Texto do campo
  // ... outros textos
},
```

**Exemplo prático:**
```typescript
textos: {
  tituloPrincipal: 'Consulte seu Dia de Coleta',
  descricao: 'Sistema oficial da Prefeitura de Campinas para consultar os horários de coleta de lixo residencial.',
  placeholderBusca: 'Ex: Rua 13 de Maio, 1200, Cambuí, Campinas',
},
```

---

### 4️⃣ **Logo Personalizado** 🖼️

Para usar o logo da sua prefeitura:

**Passo 1:** Coloque o arquivo do logo na pasta `public/`
- Formato: PNG ou SVG (fundo transparente recomendado)
- Tamanho: 200x200px ou maior

**Passo 2:** Configure no arquivo:

```typescript
visual: {
  usarLogo: true,                    // ⬅️ Mude para true
  caminhoLogo: '/logo-prefeitura.png', // ⬅️ Nome do arquivo
  tamanhoIcone: 60,                   // ⬅️ Tamanho em pixels
},
```

**Sem logo?** Deixe assim:
```typescript
visual: {
  usarLogo: false,  // Usa ícone verde padrão
  tamanhoIcone: 40,
},
```

---

### 5️⃣ **Mensagens de Erro** ⚠️

```typescript
mensagens: {
  enderecoNaoEncontrado: 'Endereço não encontrado...',
  enderecoForaCobertura: 'Endereço não localizado na área...',
  erroGenerico: 'Ocorreu um erro...',
},
```

---

### 6️⃣ **Redes Sociais** 📱 (Opcional)

```typescript
links: {
  facebook: 'https://facebook.com/prefeituracampinas',
  instagram: 'https://instagram.com/prefeituracampinas',
  whatsapp: 'https://wa.me/5519999999999',
},
```

Para **não usar** redes sociais, deixe vazio:
```typescript
links: {
  // Deixe comentado ou vazio
},
```

---

## 🚀 COMO APLICAR AS MUDANÇAS

### Passo 1: Editar o arquivo
- Abra `app/config/site-config.ts`
- Faça suas alterações
- **Salve o arquivo** (Ctrl + S)

### Passo 2: Testar localmente (opcional)
```bash
cd coleta-lixo
npm run dev
```
Abra: http://localhost:3000

### Passo 3: Fazer deploy
```bash
git add .
git commit -m "Customizar para Prefeitura de [SUA CIDADE]"
git push origin main
```

A Vercel vai detectar automaticamente e fazer o deploy! ⚡
Em 2-3 minutos seu site estará atualizado.

---

## 📋 EXEMPLOS COMPLETOS

### Exemplo 1: Prefeitura de Campinas (Tema Azul)

```typescript
export const siteConfig: SiteConfig = {
  prefeitura: {
    nome: 'Prefeitura de Campinas',
    cidade: 'Campinas',
    estado: 'SP',
    site: 'https://www.campinas.sp.gov.br',
    telefone: '(19) 2116-0156',
    email: 'atendimento@campinas.sp.gov.br',
  },

  tema: {
    corPrincipal: '#0066CC',
    corPrincipalEscura: '#004C99',
    corSecundaria: '#3399FF',
    corTextoEscuro: '#1a1a1a',
    corTextoMedio: '#4a4a4a',
    corTextoClaro: '#999999',
  },

  textos: {
    tituloPrincipal: 'Consulta de Coleta - Campinas',
    descricao: 'Sistema oficial para consultar dias e horários de coleta de lixo em Campinas.',
    placeholderBusca: 'Ex: Rua 13 de Maio, 1200, Cambuí, Campinas',
    // ... resto igual
  },

  visual: {
    usarLogo: true,
    caminhoLogo: '/logo-campinas.png',
    tamanhoIcone: 60,
  },
};
```

### Exemplo 2: Prefeitura do Rio (Tema Laranja)

```typescript
export const siteConfig: SiteConfig = {
  prefeitura: {
    nome: 'Prefeitura do Rio de Janeiro',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    site: 'https://www.rio.rj.gov.br',
    telefone: '1746',
    email: 'comlurb@rio.rj.gov.br',
  },

  tema: {
    corPrincipal: '#FF6B35',
    corPrincipalEscura: '#CC5429',
    corSecundaria: '#FF8C42',
    corTextoEscuro: '#2C2C2C',
    corTextoMedio: '#555555',
    corTextoClaro: '#AAAAAA',
  },

  textos: {
    tituloPrincipal: 'Coleta Carioca',
    descricao: 'Descubra quando o lixo passa na sua rua. Sistema oficial da COMLURB.',
    placeholderBusca: 'Ex: Av. Atlântica, 1500, Copacabana, Rio de Janeiro',
    // ... resto
  },

  visual: {
    usarLogo: false,
    tamanhoIcone: 40,
  },
};
```

---

## ❓ DÚVIDAS FREQUENTES

### Como saber o código HEX de uma cor?
Use: https://htmlcolors.com/ ou tire print da cor desejada e use: https://imagecolorpicker.com/

### Posso mudar a fonte/tipografia?
Sim, mas é mais técnico. Avise se precisar de ajuda!

### Como adicionar mais campos no formulário?
Isso requer programação. Entre em contato para customizações avançadas.

### O site é responsivo (mobile)?
Sim! Funciona perfeitamente em celular, tablet e desktop.

---

## 🆘 PRECISA DE AJUDA?

Se tiver dificuldades, me avise! Posso:
- Fazer as customizações para você
- Criar temas personalizados
- Adicionar funcionalidades extras
- Configurar domínio personalizado

---

**Desenvolvido com 💚 para facilitar a vida das prefeituras**
