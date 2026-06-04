import { createSignal, onMount, onCleanup } from 'solid-js';
import { links } from '../lib/links';

const btnBase = {
  "display": "inline-flex",
  "align-items": "center",
  "justify-content": "center",
  "font-family": "var(--font-ui)",
  "font-weight": "600",
  "font-size": "14px",
  "min-height": "44px",
  "flex": "1",
  "text-decoration": "none",
  "cursor": "pointer",
  "border-radius": "0",
  "transition": "background-color 150ms, color 150ms",
} as const;

export default function StickyMobileCta() {
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    onCleanup(() => window.removeEventListener('scroll', handleScroll));
  });

  return (
    <div
      style={{
        "position": "fixed",
        "bottom": "0",
        "left": "0",
        "right": "0",
        "z-index": "60",
        "background": "var(--color-ink)",
        "color": "var(--color-cream)",
        "display": "flex",
        "align-items": "center",
        "gap": "8px",
        "padding": "12px 16px",
        "transition": "transform 300ms",
        "transform": visible() ? "translateY(0)" : "translateY(100%)"
      }}
    >
      <span style={{
        "font-family": "var(--font-display)",
        "font-size": "clamp(18px, 5vw, 24px)",
        "white-space": "nowrap",
        "flex-shrink": "0",
      }}>
        39€
      </span>
      <a
        href={links.quiz('sticky-test')}
        data-cta-id="sticky-test"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...btnBase,
          "background": "transparent",
          "color": "var(--color-cream)",
          "border": "1px solid var(--color-cream)",
          "font-size": "clamp(12px, 3.5vw, 14px)",
        }}
      >
        Тест
      </a>
      <a
        href={links.offer('sticky-buy')}
        data-cta-id="sticky-buy"
        style={{
          ...btnBase,
          "background": "var(--color-cream)",
          "color": "var(--color-ink)",
          "border": "1px solid var(--color-cream)",
          "font-size": "clamp(12px, 3.5vw, 14px)",
        }}
      >
        Получить
      </a>
    </div>
  );
}
