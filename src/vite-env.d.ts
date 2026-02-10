/// <reference types="vite/client" />

// LiveAgent chat widget type declarations
interface LiveAgent {
  openChatWindow?: () => void;
  showChatWindow?: () => void;
  createButton?: (buttonId: string, element: HTMLElement) => void;
  [key: string]: any; // Allow for other LiveAgent methods
}

interface Window {
  LiveAgent?: LiveAgent;
}
