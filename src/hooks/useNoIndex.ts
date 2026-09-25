import { useEffect } from 'react';

/**
 * Хук для добавления мета-тега noindex на страницу.
 * Используется на страницах, которые ещё не готовы к индексации.
 * 
 * При монтировании компонента добавляет <meta name="robots" content="noindex">
 * При размонтировании - удаляет его.
 */
export function useNoIndex() {
  useEffect(() => {
    // Создаём мета-тег
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    meta.setAttribute('data-noindex', 'true');
    
    // Добавляем в <head>
    document.head.appendChild(meta);
    
    // Удаляем при размонтировании
    return () => {
      const existingMeta = document.querySelector('meta[data-noindex="true"]');
      if (existingMeta) {
        existingMeta.remove();
      }
    };
  }, []);
}
