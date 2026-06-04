const APP = import.meta.env.PUBLIC_APP_URL || 'https://km-curso.vercel.app';
const SITE_TAG = 'v2-hairlab';

/**
 * Все ссылки с второго лендинга на km-curso идут через эти функции.
 * Параметр cta — короткий id места, откуда кликнули (hero, nav, sticky, etc.)
 * Это нужно для аналитики: какая кнопка лучше конвертит.
 */
export const links = {
  // Кнопка "Пройти тест" — ВЕДЁТ ПРЯМО НА /quiz, не на главную
  quiz: (cta: string) =>
    `${APP}/quiz?utm_source=${SITE_TAG}&utm_medium=cta&utm_content=${cta}`,

  // Кнопка "Получить за 39€" / "Купить" — ведёт на страницу с тарифами
  offer: (cta: string) =>
    `${APP}/offer?utm_source=${SITE_TAG}&utm_medium=cta&utm_content=${cta}`,

  // Бесплатный урок (для прогрева, если будет такая кнопка)
  lesson: (cta: string) =>
    `${APP}/lesson?utm_source=${SITE_TAG}&utm_medium=cta&utm_content=${cta}`,
};
