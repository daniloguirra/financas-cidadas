/* =========================================================
   Ícones e ilustrações em SVG (desenhados para o projeto).
   As cores vêm das variáveis CSS, então funcionam no modo escuro.
   ========================================================= */

const ICONES = {
  orcamento: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><rect x="8" y="5.5" width="8" height="4" rx="1"/><path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01"/>',
  cartao: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 9.5h19M6 15h4"/>',
  reserva: '<path d="M3 12a9 9 0 0 1 18 0z"/><path d="M12 12v6.5a2 2 0 0 1-4 0"/><path d="M12 3v-.5"/>',
  escudo: '<path d="M12 3l7.5 3v5.5c0 4.6-3.1 8.4-7.5 9.5-4.4-1.1-7.5-4.9-7.5-9.5V6z"/><path d="M9 12l2 2 4-4"/>',
  loja: '<path d="M4 11v9h16v-9"/><path d="M3 10l1.5-6h15L21 10"/><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M10 20v-5h4v5"/>',
  banco: '<path d="M3 9.5L12 4l9 5.5"/><path d="M4 9.5h16M5.5 9.5v8M10 9.5v8M14 9.5v8M18.5 9.5v8M3.5 20h17"/>',
  medalha: '<circle cx="12" cy="9" r="5.5"/><path d="M9 14l-1.5 7 4.5-2.5 4.5 2.5L15 14"/>',
  estrela: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  cadeado: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  lampada: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z"/>',
  diploma: '<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M7 8h10M7 11h6"/><circle cx="16.5" cy="15" r="2.5"/><path d="M15 17l-.5 4 2-1 2 1-.5-4"/>',
  seta: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  voltar: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  impressora: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
};

function icone(nome, classe = '') {
  return `<svg class="icone ${classe}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[nome] || ''}</svg>`;
}

// Logo: barras de crescimento com seta (crescimento econômico / ODS 8)
const LOGO = `
<svg class="logo" viewBox="0 0 48 48" aria-hidden="true">
  <rect width="48" height="48" rx="12" fill="var(--primaria)"/>
  <g fill="var(--sobre-primaria)">
    <rect x="10" y="29" width="7" height="10" rx="1.5"/>
    <rect x="20.5" y="23" width="7" height="16" rx="1.5"/>
    <rect x="31" y="17" width="7" height="22" rx="1.5"/>
  </g>
  <path d="M9 22l9-6.5 6 3.5 12-9" stroke="var(--destaque)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M31 10h5v5" stroke="var(--destaque)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// Ilustração da página inicial: pessoas da comunidade e um gráfico em crescimento
const ILUSTRACAO_HERO = `
<svg class="hero-ilustracao" viewBox="0 0 320 200" role="img" aria-label="Pessoas da comunidade diante de um gráfico de crescimento">
  <ellipse cx="160" cy="186" rx="150" ry="10" fill="var(--borda)"/>
  <rect x="172" y="112" width="28" height="74" rx="4" fill="var(--primaria)" opacity=".35"/>
  <rect x="208" y="82" width="28" height="104" rx="4" fill="var(--primaria)" opacity=".6"/>
  <rect x="244" y="50" width="28" height="136" rx="4" fill="var(--primaria)"/>
  <polyline points="162,100 198,72 222,84 276,34" fill="none" stroke="var(--destaque)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="258,32 278,32 278,52" fill="none" stroke="var(--destaque)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <circle cx="296" cy="92" r="14" fill="var(--destaque)"/>
    <text x="296" y="97" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">R$</text>
    <circle cx="150" cy="56" r="10" fill="var(--destaque)" opacity=".8"/>
    <text x="150" y="60" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R$</text>
  </g>
  <!-- pessoas -->
  <circle cx="58" cy="94" r="15" fill="#8d5524"/>
  <rect x="36" y="113" width="44" height="73" rx="20" fill="var(--primaria)"/>
  <circle cx="106" cy="104" r="14" fill="#f1c27d"/>
  <rect x="86" y="122" width="40" height="64" rx="18" fill="var(--secundaria)"/>
  <circle cx="145" cy="132" r="10" fill="#c68642"/>
  <rect x="131" y="146" width="28" height="40" rx="13" fill="var(--destaque)"/>
</svg>`;
