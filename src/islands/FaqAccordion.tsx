import { createSignal, For } from 'solid-js';

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: readonly FaqItem[];
}

export default function FaqAccordion(props: Props) {
  const [openIndex, setOpenIndex] = createSignal(0);

  return (
    <For each={props.items}>
      {(item, index) => (
        <div style="border-bottom: 1px solid var(--color-line);">
          <button
            style="width: 100%; text-align: left; background: none; border: 0; cursor: pointer; font-family: var(--font-body); font-weight: 500; font-size: 20px; color: var(--color-ink); padding: 28px 0; display: flex; justify-content: space-between; align-items: center; gap: 16px;"
            onClick={() => setOpenIndex(openIndex() === index() ? -1 : index())}
          >
            {item.question}
            <span
              style={{
                "font-family": "var(--font-display)",
                "font-size": "28px",
                "color": "var(--color-taupe)",
                "flex-shrink": "0",
                "transition": "transform 300ms",
                "transform": openIndex() === index() ? "rotate(45deg)" : "rotate(0deg)"
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              "overflow": "hidden",
              "transition": "all 300ms",
              "max-height": openIndex() === index() ? "400px" : "0px"
            }}
          >
            <div style="font-family: var(--font-body); font-size: 18px; line-height: 1.6; color: var(--color-ink-soft); padding-bottom: 28px;">
              {item.answer}
            </div>
          </div>
        </div>
      )}
    </For>
  );
}
