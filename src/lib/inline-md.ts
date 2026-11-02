/** Tiny inline Markdown for FAQ answers: [links](/path/) and **bold** only. Text is HTML-escaped first. */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const marked = (s: string) =>
  esc(s)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
/** Same text with Markdown removed, for JSON-LD and plain-text outputs. */
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
