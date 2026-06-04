import { createSignal, onMount, onCleanup, Show } from 'solid-js';

interface Props {
  endDate: string;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function calcTimeLeft(endDate: string): TimeLeft {
  const diff = new Date(endDate).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

export default function CountdownTimer(props: Props) {
  const [time, setTime] = createSignal<TimeLeft>(calcTimeLeft(props.endDate));

  onMount(() => {
    const interval = setInterval(() => setTime(calcTimeLeft(props.endDate)), 1000);
    onCleanup(() => clearInterval(interval));
  });

  return (
    <Show
      when={!time().expired}
      fallback={<div style={{ opacity: 0.5, 'font-size': '14px' }}>Акция завершена</div>}
    >
      <div style={{
        display: 'inline-flex',
        'align-items': 'center',
        gap: '12px',
        'font-family': 'var(--font-ui)',
      }}>
        {props.label && (
          <span style={{ 'font-size': '14px', opacity: 0.8 }}>{props.label}</span>
        )}
        <div style={{
          display: 'flex',
          gap: '8px',
          'font-variant-numeric': 'tabular-nums',
          'font-weight': 600,
        }}>
          <TimeBlock value={time().days} label="дн" />
          <Sep />
          <TimeBlock value={time().hours} label="ч" pad />
          <Sep />
          <TimeBlock value={time().minutes} label="мин" pad />
          <Sep />
          <TimeBlock value={time().seconds} label="сек" pad />
        </div>
      </div>
    </Show>
  );
}

function TimeBlock(props: { value: number; label: string; pad?: boolean }) {
  return (
    <div style={{ display: 'flex', 'flex-direction': 'column', 'align-items': 'center', 'min-width': '44px' }}>
      <span style={{ 'font-size': 'clamp(24px, 4vw, 36px)', 'line-height': '1' }}>
        {props.pad ? String(props.value).padStart(2, '0') : props.value}
      </span>
      <span style={{ 'font-size': '11px', opacity: 0.6, 'margin-top': '4px', 'text-transform': 'uppercase', 'letter-spacing': '0.5px' }}>
        {props.label}
      </span>
    </div>
  );
}

function Sep() {
  return <span style={{ 'font-size': 'clamp(24px, 4vw, 36px)', opacity: 0.3 }}>:</span>;
}
