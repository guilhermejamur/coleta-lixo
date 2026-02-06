// Serviço de Cache para otimizar buscas repetidas

interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresIn: number; // em milissegundos
}

class CacheService {
  private prefix = 'coleta_cache_';

  /**
   * Salva dados no cache
   */
  set<T>(key: string, data: T, expiresInDays: number = 30): void {
    if (typeof window === 'undefined') return; // SSR safety

    const cacheItem: CacheItem<T> = {
      data,
      timestamp: Date.now(),
      expiresIn: expiresInDays * 24 * 60 * 60 * 1000, // dias para ms
    };

    try {
      localStorage.setItem(
        `${this.prefix}${key}`,
        JSON.stringify(cacheItem)
      );
    } catch (error) {
      console.warn('Erro ao salvar no cache:', error);
    }
  }

  /**
   * Recupera dados do cache
   */
  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null; // SSR safety

    try {
      const item = localStorage.getItem(`${this.prefix}${key}`);
      if (!item) return null;

      const cacheItem: CacheItem<T> = JSON.parse(item);
      const now = Date.now();

      // Verifica se expirou
      if (now - cacheItem.timestamp > cacheItem.expiresIn) {
        this.remove(key);
        return null;
      }

      return cacheItem.data;
    } catch (error) {
      console.warn('Erro ao ler cache:', error);
      return null;
    }
  }

  /**
   * Remove item do cache
   */
  remove(key: string): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.removeItem(`${this.prefix}${key}`);
    } catch (error) {
      console.warn('Erro ao remover do cache:', error);
    }
  }

  /**
   * Limpa todo o cache
   */
  clear(): void {
    if (typeof window === 'undefined') return;

    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Erro ao limpar cache:', error);
    }
  }

  /**
   * Obtém estatísticas do cache
   */
  getStats(): { totalItems: number; totalSize: string } {
    if (typeof window === 'undefined') {
      return { totalItems: 0, totalSize: '0 KB' };
    }

    let totalItems = 0;
    let totalSize = 0;

    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith(this.prefix)) {
          totalItems++;
          const item = localStorage.getItem(key);
          if (item) {
            totalSize += item.length;
          }
        }
      });

      return {
        totalItems,
        totalSize: `${(totalSize / 1024).toFixed(2)} KB`,
      };
    } catch (error) {
      return { totalItems: 0, totalSize: '0 KB' };
    }
  }
}

// Instância única do cache
export const cache = new CacheService();

// Funções de utilidade para cache de geocodificação
export function getCacheKey(address: string): string {
  return `geocode_${address.toLowerCase().trim()}`;
}
