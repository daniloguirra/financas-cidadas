/* =========================================================
   Gráficos e infográficos usados dentro das lições.
   Cada lição pode indicar "grafico: 'nome'" em js/conteudo.js.
   ========================================================= */

const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

// Barra única dividida em partes (ex.: 50/30/20)
function barraEmpilhada(titulo, itens, rodape) {
  const segmentos = itens.map((it) => `
    <div class="seg" style="flex:${it.pct};background:${it.cor}" title="${it.rotulo}: ${it.pct}%">
      <span>${it.pct}%</span>
    </div>`).join('');
  const legenda = itens.map((it) => `
    <li><span class="bolinha" style="background:${it.cor}"></span>${it.rotulo}<strong>${it.valor || ''}</strong></li>`).join('');
  return `
    <figure class="grafico">
      <figcaption>${titulo}</figcaption>
      <div class="barra-empilhada">${segmentos}</div>
      <ul class="legenda-grafico">${legenda}</ul>
      ${rodape ? `<p class="grafico-nota">${rodape}</p>` : ''}
    </figure>`;
}

// Barras horizontais comparando valores
function barrasHorizontais(titulo, itens, rodape) {
  const max = Math.max(...itens.map((i) => i.valor));
  const linhas = itens.map((it) => `
    <div class="bh-linha">
      <span class="bh-rotulo">${it.rotulo}</span>
      <div class="bh-trilho"><div class="bh-barra" style="width:${(it.valor / max) * 100}%;background:${it.cor}"></div></div>
      <strong class="bh-valor">${brl(it.valor)}</strong>
    </div>`).join('');
  return `
    <figure class="grafico">
      <figcaption>${titulo}</figcaption>
      ${linhas}
      ${rodape ? `<p class="grafico-nota">${rodape}</p>` : ''}
    </figure>`;
}

const GRAFICOS = {
  regra503020: () => barraEmpilhada(
    'Exemplo: renda líquida de R$ 2.000 por mês',
    [
      { rotulo: 'Necessidades', pct: 50, valor: brl(1000), cor: 'var(--primaria)' },
      { rotulo: 'Desejos', pct: 30, valor: brl(600), cor: 'var(--secundaria)' },
      { rotulo: 'Futuro', pct: 20, valor: brl(400), cor: 'var(--destaque)' },
    ],
  ),

  // Juros compostos: R$ 1.000 em duas taxas mensais diferentes ao longo de 12 meses
  bolaDeNeve: () => {
    const meses = [0, 3, 6, 9, 12];
    const caro = meses.map((m) => 1000 * 1.08 ** m);   // ~ teto do cheque especial
    const barato = meses.map((m) => 1000 * 1.018 ** m); // ~ consignado
    const max = 2600;
    const W = 320, H = 190, esq = 44, base = 160, alt = 140;
    const larguraGrupo = (W - esq - 10) / meses.length;

    let barras = '';
    meses.forEach((m, i) => {
      const x = esq + i * larguraGrupo + larguraGrupo / 2;
      const h1 = (barato[i] / max) * alt;
      const h2 = (caro[i] / max) * alt;
      barras += `
        <rect x="${x - 15}" y="${base - h1}" width="13" height="${h1}" rx="2" fill="var(--secundaria)"><title>${brl(barato[i])}</title></rect>
        <rect x="${x + 2}" y="${base - h2}" width="13" height="${h2}" rx="2" fill="var(--primaria)"><title>${brl(caro[i])}</title></rect>
        <text x="${x}" y="${base + 16}" text-anchor="middle" class="eixo">${m === 0 ? 'hoje' : m + ' meses'}</text>`;
    });
    const ultimo = esq + 4 * larguraGrupo + larguraGrupo / 2;
    const linhasGrade = [0, 1000, 2000].map((v) => {
      const y = base - (v / max) * alt;
      return `<line x1="${esq}" x2="${W - 6}" y1="${y}" y2="${y}" class="grade"/>
              <text x="${esq - 6}" y="${y + 4}" text-anchor="end" class="eixo">${v ? v / 1000 + ' mil' : '0'}</text>`;
    }).join('');

    return `
      <figure class="grafico">
        <figcaption>Uma dívida de R$ 1.000 sem pagamento: quanto ela vira?</figcaption>
        <svg viewBox="0 0 ${W} ${H}" class="grafico-svg" role="img"
             aria-label="Em 12 meses, R$ 1.000 vira ${brl(barato[4])} a 1,8% ao mês e ${brl(caro[4])} a 8% ao mês">
          ${linhasGrade}
          ${barras}
          <text x="${ultimo + 8}" y="${base - (caro[4] / max) * alt - 6}" text-anchor="middle" class="rotulo-valor">${brl(caro[4])}</text>
        </svg>
        <ul class="legenda-grafico">
          <li><span class="bolinha" style="background:var(--secundaria)"></span>1,8% ao mês (ex.: consignado)<strong>${brl(barato[4])}</strong></li>
          <li><span class="bolinha" style="background:var(--primaria)"></span>8% ao mês (ex.: cheque especial)<strong>${brl(caro[4])}</strong></li>
        </ul>
        <p class="grafico-nota">Exemplo ilustrativo de juros compostos. As taxas reais variam por banco.</p>
      </figure>`;
  },

  metaReserva: () => barrasHorizontais(
    'Meta de reserva para quem gasta R$ 1.500 por mês com o essencial',
    [
      { rotulo: '3 meses', valor: 4500, cor: 'var(--secundaria)' },
      { rotulo: '6 meses', valor: 9000, cor: 'var(--primaria)' },
      { rotulo: '12 meses', valor: 18000, cor: 'var(--destaque)' },
    ],
    '12 meses é o recomendado para autônomos e MEIs, cuja renda varia mais.',
  ),

  composicaoPreco: () => barraEmpilhada(
    'Do que é feito o preço de um bolo vendido a R$ 50',
    [
      { rotulo: 'Materiais', pct: 40, valor: brl(20), cor: 'var(--secundaria)' },
      { rotulo: 'Custos fixos', pct: 15, valor: 'R$ 7,50', cor: 'var(--neutro)' },
      { rotulo: 'Seu trabalho', pct: 25, valor: 'R$ 12,50', cor: 'var(--primaria)' },
      { rotulo: 'Lucro', pct: 20, valor: brl(10), cor: 'var(--destaque)' },
    ],
    'Exemplo ilustrativo. Os percentuais mudam de um negócio para outro.',
  ),

  alertaGolpe: () => `
    <figure class="grafico grafico-golpe">
      <svg viewBox="0 0 300 170" class="grafico-svg" role="img" aria-label="Celular recebendo mensagem suspeita pedindo Pix urgente">
        <rect x="95" y="8" width="110" height="156" rx="16" fill="var(--superficie)" stroke="var(--texto-suave)" stroke-width="3"/>
        <rect x="130" y="16" width="40" height="5" rx="2.5" fill="var(--borda)"/>
        <rect x="106" y="36" width="80" height="34" rx="8" fill="var(--fundo)" stroke="var(--borda)"/>
        <text x="114" y="50" class="eixo">Oi, troquei de</text>
        <text x="114" y="62" class="eixo">número...</text>
        <rect x="106" y="78" width="88" height="34" rx="8" fill="var(--fundo)" stroke="var(--borda)"/>
        <text x="114" y="92" class="eixo">Faz um Pix</text>
        <text x="114" y="104" class="eixo" font-weight="700">URGENTE?</text>
        <circle cx="205" cy="40" r="22" fill="var(--erro)"/>
        <text x="205" y="49" text-anchor="middle" font-size="26" font-weight="800" fill="#fff">!</text>
        <g transform="translate(20 60)">
          <rect width="62" height="62" rx="12" fill="var(--ok-fundo)"/>
          <path d="M18 32l9 9 18-20" stroke="var(--ok)" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <text x="51" y="140" text-anchor="middle" class="eixo">Confirme</text>
        <text x="51" y="152" text-anchor="middle" class="eixo">por ligação</text>
      </svg>
      <figcaption>Desconfie de pressa, número novo e pedido de dinheiro.</figcaption>
    </figure>`,
};
