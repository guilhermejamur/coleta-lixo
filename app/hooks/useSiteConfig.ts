import { siteConfig } from '../config/site-config';

/**
 * Hook para acessar a configuração do site
 * Uso: const config = useSiteConfig();
 */
export function useSiteConfig() {
  return siteConfig;
}
