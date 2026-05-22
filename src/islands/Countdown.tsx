import { onMount, onCleanup } from 'solid-js';

const STORAGE_KEY = 'hairlab_deadline';

export default function Countdown() {
  let deadline: number;
  let displayEl: HTMLDivElement | undefined;

  onMount(() => {
    const now = Date.now();
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? parseInt(stored, 10) : NaN;

    if (!parsed || isNaN(parsed) || parsed < now) {
      deadline = now + 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(deadline));
    } else {
      deadline = parsed;
    }

    const pad = (n: number) => (n < 10 ? `0${n}` : String(n));

    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      if (displayEl) {
        displayEl.textContent = `${pad(h)} : ${pad(m)} : ${pad(s)}`;
      }
    };

    tick();
    const interval = setInterval(tick, 1000);

    onCleanup(() => clearInterval(interval));
  });

  return <div ref={displayEl}>24 : 00 : 00</div>;
}
