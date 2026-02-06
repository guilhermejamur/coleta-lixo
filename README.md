# 🗑️ Sistema de Consulta de Coleta de Lixo Urbana

Sistema web moderno para consulta de dias e horários de coleta de lixo comum e reciclável, desenvolvido especialmente para prefeituras.

## ✨ Características

- 🎨 **Design inspirado na Estre** - Interface limpa com paleta verde/cinza focada em sustentabilidade
- 📱 **100% Responsivo** - Mobile-first, funciona perfeitamente em todos os dispositivos
- 🗺️ **Geolocalização inteligente** - Usa API Nominatim para geocodificar endereços
- 📍 **Point-in-Polygon** - Lógica precisa com Turf.js para identificar áreas de coleta
- ♿ **Acessível** - Interface pensada para facilitar o acesso do cidadão
- ⚡ **Performance** - Next.js 15 com App Router e React Server Components

## 🛠️ Tecnologias

- **Next.js 15** - Framework React de produção
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Estilização utility-first
- **Turf.js** - Análise geoespacial (Point-in-Polygon)
- **Nominatim API** - Geocodificação gratuita (OpenStreetMap)
- **Lucide React** - Ícones modernos e limpos

## 🚀 Como usar

### 1. Instalação

```bash
npm install
```

### 2. Configurar arquivo GeoJSON

Substitua o arquivo `public/coleta.geojson` com os dados reais da sua prefeitura. O arquivo deve seguir esta estrutura:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "bairro": "Nome do Bairro",
        "lixo_comum": "Segunda, Quarta e Sexta - 07:00",
        "lixo_reciclavel": "Terça - 08:00"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-46.6333, -23.5505],
            [-46.6333, -23.5605],
            [-46.6233, -23.5605],
            [-46.6233, -23.5505],
            [-46.6333, -23.5505]
          ]
        ]
      }
    }
  ]
}
```

**Dicas para o GeoJSON:**
- Cada `Feature` representa uma área de coleta
- `properties` contém as informações de horários
- `geometry.coordinates` define os polígonos da área
- Use ferramentas como [geojson.io](https://geojson.io) para criar seus polígonos

### 3. Executar o projeto

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## 📁 Estrutura do Projeto

```
coleta-lixo/
├── app/
│   ├── components/          # Componentes React
│   │   ├── SearchInput.tsx  # Campo de busca
│   │   ├── ColetaCard.tsx   # Card de resultado
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorMessage.tsx
│   ├── services/            # Lógica de negócio
│   │   ├── geocoding.ts     # API Nominatim
│   │   └── geoservice.ts    # Turf.js Point-in-Polygon
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── public/
│   └── coleta.geojson       # Dados de coleta
└── tailwind.config.ts       # Configuração Tailwind (cores Estre)
```

## 🎨 Paleta de Cores (Estre)

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Principal | `#61a229` | Botões, destaques |
| Verde Escuro | `#4e8221` | Hover, estados ativos |
| Verde Claro | `#009D59` | Gradientes, acentos |
| Cinza Escuro | `#333333` | Textos principais |
| Cinza Médio | `#454545` | Textos secundários |
| Cinza Claro | `#b1a6a6` | Bordas, divisores |

## 🔧 Personalização

### Alterar cores

Edite o arquivo `tailwind.config.ts`:

```typescript
colors: {
  'estre-green': {
    DEFAULT: '#61a229',
    dark: '#4e8221',
    light: '#009D59',
  },
  // ...
}
```

### Customizar mensagens

Edite os textos nos componentes:
- `app/page.tsx` - Títulos e descrições principais
- `app/components/ErrorMessage.tsx` - Mensagens de erro
- `app/components/ColetaCard.tsx` - Labels e textos do card

## 📝 API Nominatim

O sistema usa a API gratuita do Nominatim (OpenStreetMap) para geocodificação.

**Limites de uso:**
- Máximo 1 requisição por segundo
- Recomendado adicionar um User-Agent customizado

Para produção com alto tráfego, considere:
- Hospedar sua própria instância do Nominatim
- Usar serviços pagos (Google Maps API, Mapbox, etc.)

## 🌍 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 Licença

Projeto desenvolvido para uso livre por prefeituras e órgãos públicos.

## 🤝 Contribuições

Melhorias são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se o arquivo `coleta.geojson` está no formato correto
2. Certifique-se de que os polígonos cobrem as áreas desejadas
3. Teste os endereços no formato completo: "Rua, Número, Bairro, Cidade"

---

**Desenvolvido com 💚 focando em tecnologia e sustentabilidade**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
