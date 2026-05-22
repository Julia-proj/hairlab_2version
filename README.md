# HAIRLAB — Astro проект

Закрытая система восстановления волос от Елены Александровой.

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

Сайт будет доступен на `http://localhost:4321`

## Сборка

```bash
npm run build
```

## Деплой

Проект готов к деплою на Vercel, Netlify или любую платформу, поддерживающую Astro.

## Настройка

### Ссылка оплаты

Замените `REPLACE_ME` в файле `.env` на реальную ссылку оплаты:

```
PUBLIC_CHECKOUT_URL=https://your-checkout-link.com
```

### Контент

Весь контент сайта находится в `src/data/hairlab.ts`. Изменяйте тексты там.

### Дизайн токены

Design tokens (цвета, шрифты, размеры) определены в `src/styles/global.css` через Tailwind v4 `@theme`.

## Структура проекта

- `src/data/` — контент сайта (типизированный объект)
- `src/styles/` — глобальные стили и design tokens
- `src/ui/` — переиспользуемые компоненты (Button, Container, Section, и т.д.)
- `src/sections/` — секции лендинга
- `src/islands/` — интерактивные компоненты на Solid.js
- `src/layouts/` — layout'ы
- `src/pages/` — страницы

## Стек

- Astro 5
- TypeScript (strict mode)
- Tailwind CSS v4
- Solid.js (для интерактивности)
- @astrojs/sitemap
