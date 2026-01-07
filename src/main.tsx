import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './globals.css' // Changed from index.css to globals.css
import App from './App.tsx'

// Ensure fonts are loaded before rendering
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    renderApp();
  });
} else {
  renderApp();
}

function renderApp() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
}

// Optional: Add a loading state
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = `
    <div class="fixed inset-0 flex items-center justify-center bg-white">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="font-['Rajdhani'] font-bold text-[#0F1C15] uppercase tracking-widest">LOADING COMMAND CONSOLE</p>
      </div>
    </div>
  `;
}