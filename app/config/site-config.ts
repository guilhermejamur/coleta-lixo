/**
 * ============================================
 * CONFIGURAÇÃO DO SITE - TEMPLATE PREFEITURA
 * ============================================
 *
 * Este arquivo contém TODAS as configurações visuais e textuais do site.
 * Para customizar para sua prefeitura, edite os valores abaixo.
 *
 * IMPORTANTE: Após editar, faça o deploy novamente para aplicar as mudanças.
 */

export interface SiteConfig {
  // ====== INFORMAÇÕES DA PREFEITURA ======
  prefeitura: {
    nome: string;              // Nome da prefeitura
    cidade: string;            // Nome da cidade
    estado: string;            // Sigla do estado (SP, RJ, MG, etc)
    site?: string;             // Site oficial (opcional)
    telefone?: string;         // Telefone de contato (opcional)
    email?: string;            // Email de contato (opcional)
  };

  // ====== CORES DO TEMA ======
  tema: {
    // Cor principal (botões, destaques)
    corPrincipal: string;      // Ex: '#61a229' (verde Estre)

    // Cor principal escura (hover, estados ativos)
    corPrincipalEscura: string; // Ex: '#4e8221'

    // Cor secundária (gradientes, acentos)
    corSecundaria: string;      // Ex: '#009D59'

    // Cores de texto
    corTextoEscuro: string;     // Ex: '#333333'
    corTextoMedio: string;      // Ex: '#454545'
    corTextoClaro: string;      // Ex: '#b1a6a6'
  };

  // ====== TEXTOS DO SITE ======
  textos: {
    // Título principal
    tituloPrincipal: string;

    // Subtítulo/descrição
    descricao: string;

    // Placeholder do campo de busca
    placeholderBusca: string;

    // Mensagens de erro
    mensagens: {
      enderecoNaoEncontrado: string;
      enderecoForaCobertura: string;
      erroGenerico: string;
    };

    // Labels dos cards de resultado
    labels: {
      enderecoLocalizado: string;
      bairro: string;
      lixoComum: string;
      lixoReciclavel: string;
      mensagemRodape: string;
    };

    // Footer
    footer: {
      titulo: string;
      subtitulo: string;
    };
  };

  // ====== LOGO/ÍCONE ======
  visual: {
    // Usar logo personalizado? (true = usar logo, false = usar ícone padrão)
    usarLogo: boolean;

    // Caminho do logo (coloque o arquivo em /public/)
    caminhoLogo?: string;      // Ex: '/logo-prefeitura.png'

    // Tamanho do logo/ícone
    tamanhoIcone: number;      // Ex: 40 (pixels)
  };

  // ====== LINKS ÚTEIS (opcional) ======
  links?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    whatsapp?: string;
  };
}

// ============================================
// CONFIGURAÇÃO PADRÃO (TEMPLATE ESTRE)
// ============================================
export const siteConfig: SiteConfig = {
  prefeitura: {
    nome: 'Prefeitura Municipal',
    cidade: 'São Paulo',
    estado: 'SP',
    site: 'https://www.prefeitura.sp.gov.br',
    telefone: '(11) 156',
    email: 'contato@prefeitura.sp.gov.br',
  },

  tema: {
    corPrincipal: '#61a229',        // Verde Estre
    corPrincipalEscura: '#4e8221',  // Verde escuro
    corSecundaria: '#009D59',       // Verde claro
    corTextoEscuro: '#333333',      // Cinza escuro
    corTextoMedio: '#454545',       // Cinza médio
    corTextoClaro: '#b1a6a6',       // Cinza claro
  },

  textos: {
    tituloPrincipal: 'Consulta de Coleta de Lixo',
    descricao: 'Descubra os dias e horários de coleta de lixo comum e reciclável no seu endereço. Contribua com a limpeza da cidade e a preservação do meio ambiente.',
    placeholderBusca: 'Digite seu endereço completo (Ex: Rua das Flores, 123, Centro, São Paulo)',

    mensagens: {
      enderecoNaoEncontrado: 'Endereço não encontrado. Verifique o endereço digitado e tente novamente.',
      enderecoForaCobertura: 'Endereço não localizado na área de cobertura atual. Entre em contato com a prefeitura para mais informações.',
      erroGenerico: 'Ocorreu um erro ao buscar as informações. Tente novamente mais tarde.',
    },

    labels: {
      enderecoLocalizado: 'Endereço localizado',
      bairro: 'Bairro',
      lixoComum: 'Lixo Comum',
      lixoReciclavel: 'Lixo Reciclável',
      mensagemRodape: 'Mantenha seu lixo separado e contribua com o meio ambiente',
    },

    footer: {
      titulo: 'Sistema de Consulta de Coleta de Lixo Urbana',
      subtitulo: 'Desenvolvido com tecnologia e sustentabilidade em mente',
    },
  },

  visual: {
    usarLogo: false,
    tamanhoIcone: 40,
  },

  links: {
    // facebook: 'https://facebook.com/suaprefeitura',
    // instagram: 'https://instagram.com/suaprefeitura',
    // whatsapp: 'https://wa.me/5511999999999',
  },
};

// ============================================
// EXEMPLOS DE CONFIGURAÇÕES PARA OUTRAS PREFEITURAS
// ============================================

// Exemplo 1: Prefeitura com tema azul
export const exemploTemaAzul: SiteConfig = {
  ...siteConfig,
  prefeitura: {
    nome: 'Prefeitura de Exemplo',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
  },
  tema: {
    corPrincipal: '#0066CC',
    corPrincipalEscura: '#004C99',
    corSecundaria: '#3399FF',
    corTextoEscuro: '#1a1a1a',
    corTextoMedio: '#4a4a4a',
    corTextoClaro: '#999999',
  },
};

// Exemplo 2: Prefeitura com tema laranja
export const exemploTemaLaranja: SiteConfig = {
  ...siteConfig,
  prefeitura: {
    nome: 'Prefeitura Municipal',
    cidade: 'Belo Horizonte',
    estado: 'MG',
  },
  tema: {
    corPrincipal: '#FF6B35',
    corPrincipalEscura: '#CC5429',
    corSecundaria: '#FF8C42',
    corTextoEscuro: '#2C2C2C',
    corTextoMedio: '#555555',
    corTextoClaro: '#AAAAAA',
  },
};

// Exemplo 3: Prefeitura com logo personalizado
export const exemploComLogo: SiteConfig = {
  ...siteConfig,
  visual: {
    usarLogo: true,
    caminhoLogo: '/logo-prefeitura.png',
    tamanhoIcone: 60,
  },
};
