import { createSignal, onMount, onCleanup } from 'solid-js';

export default function StickyMobileCta() {
  const [visible, setVisible] = createSignal(false);
  const checkoutUrl = import.meta.env.PUBLIC_CHECKOUT_URL || '#';

  onMount(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

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
        "justify-content": "space-between",
        "padding": "12px 20px",
        "transition": "transform 300ms",
        "transform": visible() ? "translateY(0)" : "translateY(100%)"
      }}
    >
      <span style="font-family: var(--font-display); font-size: 24px;">38€</span>
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cta-id="sticky"
        style={{
          "display": "inline-flex",
          "align-items": "center",
          "justify-content": "center",
          "font-family": "var(--font-ui)",
          "font-weight": "600",
          "min-height": "44px",
          "padding": "0 24px",
          "font-size": "14px",
          "background": "var(--color-cream)",
          "color": "var(--color-ink)",
          "cursor": "pointer",
          "transition": "background-color 200ms",
          "border-radius": "0",
          "border": "0",
          "text-decoration": "none"
        }}
      >
        Получить
      </a>
    </div>
  );
}
