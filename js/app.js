/* =========================================================
   Finanças Cidadãs - Trilha de Educação Financeira (ODS 8)
   Telas: início (trilha) → lição → quiz → resultado → certificado
   Progresso salvo no navegador (localStorage).
   ========================================================= */

const CHAVE_STORAGE = 'financasCidadas:trilha:v1';
const PONTOS_POR_ACERTO = 10;
const APROVACAO = 0.7; // 70% de acertos para concluir o módulo

const tela = document.getElementById('tela');
document.getElementById('logo').innerHTML = LOGO;

// ---------------- Estado salvo ----------------
// progresso: { [idModulo]: { melhor: nº de acertos, concluido: bool } }
let estado = carregar();

function carregar() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_STORAGE));
    return { progresso: {}, nome: '', ...dados };
  } catch {
    return { progresso: {}, nome: '' };
  }
}

function salvar() {
  try {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(estado));
  } catch {
    /* modo privado ou sem espaço: segue sem salvar */
  }
}

// ---------------- Utilitários ----------------
function escapar(txt) {
  const div = document.createElement('div');
  div.textContent = txt;
  return div.innerHTML;
}

const minimoAcertos = (modulo) => Math.ceil(modulo.quiz.length * APROVACAO);
const concluido = (id) => !!estado.progresso[id]?.concluido;
const qtdConcluidos = () => MODULOS.filter((m) => concluido(m.id)).length;
const trilhaCompleta = () => qtdConcluidos() === MODULOS.length;

function pontosTotais() {
  return MODULOS.reduce((soma, m) => soma + (estado.progresso[m.id]?.melhor || 0) * PONTOS_POR_ACERTO, 0);
}

function pontosMaximos() {
  return MODULOS.reduce((soma, m) => soma + m.quiz.length * PONTOS_POR_ACERTO, 0);
}

// Um módulo é liberado quando o anterior foi concluído
function liberado(indice) {
  return indice === 0 || concluido(MODULOS[indice - 1].id);
}

// Anel de progresso em SVG (usado na trilha e no resultado)
function anel(percentual, texto, legenda) {
  const r = 15.915; // circunferência = 100
  return `
    <svg class="anel" viewBox="0 0 42 42" role="img" aria-label="${legenda}: ${texto}">
      <circle cx="21" cy="21" r="${r}" fill="none" stroke="var(--borda)" stroke-width="4"/>
      <circle cx="21" cy="21" r="${r}" fill="none" stroke="var(--primaria)" stroke-width="4" stroke-linecap="round"
        stroke-dasharray="${percentual} ${100 - percentual}" stroke-dashoffset="25"/>
      <text x="21" y="22" class="anel-valor">${texto}</text>
      <text x="21" y="27.5" class="anel-legenda">${legenda}</text>
    </svg>`;
}

function atualizarPlacar() {
  document.getElementById('placarPontos').innerHTML = `${icone('estrela')} <strong>${pontosTotais()}</strong> pts`;
  document.getElementById('placarModulos').innerHTML = `${icone('medalha')} <strong>${qtdConcluidos()}/${MODULOS.length}</strong>`;
}

function mostrar(html) {
  tela.innerHTML = html;
  atualizarPlacar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const foco = tela.querySelector('[data-foco]');
  if (foco) foco.focus({ preventScroll: true });
}

function migalha(...partes) {
  return `<nav class="migalha nao-imprimir">
    <button class="link" data-voltar>${icone('voltar')} Trilha</button>
    ${partes.map((p) => `<span>/ ${p}</span>`).join('')}
  </nav>`;
}

document.getElementById('btnInicio').addEventListener('click', telaInicio);

// =========================================================
// TELA: INÍCIO (mapa da trilha)
// =========================================================
function telaInicio() {
  const feitos = qtdConcluidos();
  const percentual = Math.round((feitos / MODULOS.length) * 100);

  const cards = MODULOS.map((m, i) => {
    const p = estado.progresso[m.id];
    const aberto = liberado(i);
    let status, classe, botao;

    if (concluido(m.id)) {
      const gabarito = p.melhor === m.quiz.length;
      status = `${icone('check')} Concluído · ${p.melhor}/${m.quiz.length} acertos${gabarito ? ' · gabaritou!' : ''}`;
      classe = 'concluido';
      botao = `<button class="btn btn-secundario" data-licao="${m.id}">Revisar</button>`;
    } else if (aberto) {
      status = p ? `Melhor resultado: ${p.melhor}/${m.quiz.length}. Tente de novo!` : 'Disponível';
      classe = 'disponivel';
      botao = `<button class="btn" data-licao="${m.id}">${p ? 'Continuar' : 'Começar'} ${icone('seta')}</button>`;
    } else {
      status = `${icone('cadeado')} Conclua o módulo anterior para liberar`;
      classe = 'bloqueado';
      botao = '';
    }

    return `
      <li class="modulo ${classe}">
        <div class="modulo-icone">${icone(m.icone)}</div>
        <div class="modulo-info">
          <span class="modulo-numero">Módulo ${i + 1}</span>
          <h3>${m.titulo}</h3>
          <p>${m.resumo}</p>
          <span class="modulo-status">${status}</span>
        </div>
        <div class="modulo-acao">${botao}</div>
      </li>`;
  }).join('');

  const medalhas = MODULOS.map((m) => `
    <span class="medalha ${concluido(m.id) ? 'ganha' : ''}" title="${m.titulo}${concluido(m.id) ? ' (conquistada)' : ''}">
      ${icone(m.icone)}
    </span>`).join('');

  mostrar(`
    <section class="hero">
      <div class="hero-texto">
        <span class="etiqueta">ODS 8 · Inclusão econômica</span>
        <h1 tabindex="-1" data-foco>Educação financeira para todos</h1>
        <p>Aprenda a organizar o orçamento, fugir de dívidas e golpes, empreender com segurança e usar os serviços
           financeiros a seu favor. São <strong>${MODULOS.length} módulos curtos</strong>, cada um com lição e quiz.
           No final, você ganha um <strong>certificado</strong>.</p>
      </div>
      ${ILUSTRACAO_HERO}
    </section>

    <section class="caixa progresso-geral">
      ${anel(percentual, `${percentual}%`, 'concluído')}
      <div class="progresso-info">
        <h2>Seu progresso</h2>
        <p class="nota">${feitos} de ${MODULOS.length} módulos · ${pontosTotais()} de ${pontosMaximos()} pontos ·
           acerte ${Math.round(APROVACAO * 100)}% do quiz para avançar</p>
        <div class="medalhas" aria-label="Medalhas por módulo">${medalhas}</div>
      </div>
    </section>

    <h2 class="titulo-secao">A trilha</h2>
    <ol class="trilha">${cards}</ol>

    <div class="caixa final ${trilhaCompleta() ? '' : 'bloqueado'}">
      <span class="final-icone">${icone('diploma')}</span>
      <div>
        <h3>Certificado de conclusão</h3>
        <p>${trilhaCompleta() ? 'Parabéns! Você concluiu toda a trilha.' : `Conclua todos os módulos para emitir (${feitos}/${MODULOS.length}).`}</p>
      </div>
      ${trilhaCompleta() ? '<button class="btn btn-destaque" id="btnCertificado">Emitir certificado</button>' : ''}
    </div>

    <div class="centro">
      <button class="link" id="btnReiniciar">Recomeçar a trilha do zero</button>
    </div>
  `);

  tela.querySelectorAll('[data-licao]').forEach((b) =>
    b.addEventListener('click', () => telaLicao(b.dataset.licao, 0)));
  document.getElementById('btnCertificado')?.addEventListener('click', telaCertificado);
  document.getElementById('btnReiniciar').addEventListener('click', () => {
    if (!confirm('Isso apaga todo o seu progresso e pontos. Continuar?')) return;
    estado = { progresso: {}, nome: '' };
    salvar();
    telaInicio();
  });
}

// =========================================================
// TELA: LIÇÃO (uma seção por vez)
// =========================================================
function telaLicao(id, passo) {
  const m = MODULOS.find((x) => x.id === id);
  const secao = m.licao[passo];
  const ultimo = passo === m.licao.length - 1;

  const pontos = m.licao.map((_, i) =>
    `<span class="ponto ${i === passo ? 'atual' : ''} ${i < passo ? 'visto' : ''}"></span>`).join('');

  mostrar(`
    ${migalha(m.titulo)}
    <article class="caixa licao">
      <div class="licao-topo">
        <span class="licao-modulo">${icone(m.icone)} ${m.titulo}</span>
        <div class="pontos" aria-label="Parte ${passo + 1} de ${m.licao.length}">${pontos}</div>
      </div>
      <h2 tabindex="-1" data-foco>${secao.titulo}</h2>
      <div class="licao-texto">${secao.texto}</div>
      ${secao.grafico && GRAFICOS[secao.grafico] ? GRAFICOS[secao.grafico]() : ''}
      <div class="navegacao">
        <button class="btn btn-secundario" id="btnAnterior" ${passo === 0 ? 'disabled' : ''}>${icone('voltar')} Anterior</button>
        ${ultimo
          ? '<button class="btn btn-destaque" id="btnQuiz">Fazer o quiz</button>'
          : `<button class="btn" id="btnProximo">Próximo ${icone('seta')}</button>`}
      </div>
    </article>
  `);

  tela.querySelector('[data-voltar]').addEventListener('click', telaInicio);
  document.getElementById('btnAnterior').addEventListener('click', () => telaLicao(id, passo - 1));
  document.getElementById('btnProximo')?.addEventListener('click', () => telaLicao(id, passo + 1));
  document.getElementById('btnQuiz')?.addEventListener('click', () => iniciarQuiz(id));
}

// =========================================================
// TELA: QUIZ
// =========================================================
let quiz = null; // { modulo, indice, acertos }

function iniciarQuiz(id) {
  quiz = { modulo: MODULOS.find((m) => m.id === id), indice: 0, acertos: 0 };
  telaPergunta();
}

function telaPergunta() {
  const { modulo, indice } = quiz;
  const q = modulo.quiz[indice];
  const letras = ['A', 'B', 'C', 'D', 'E'];

  mostrar(`
    ${migalha(modulo.titulo, 'Quiz')}
    <article class="caixa quiz">
      <div class="licao-topo">
        <span class="etiqueta">Pergunta ${indice + 1} de ${modulo.quiz.length}</span>
        <span class="nota">${quiz.acertos} acerto${quiz.acertos === 1 ? '' : 's'}</span>
      </div>
      <div class="barra fina"><div style="width:${(indice / modulo.quiz.length) * 100}%"></div></div>
      <h2 tabindex="-1" data-foco>${escapar(q.pergunta)}</h2>
      <div class="opcoes" role="group" aria-label="Alternativas">
        ${q.opcoes.map((op, i) => `
          <button class="opcao" data-opcao="${i}">
            <span class="letra">${letras[i]}</span><span>${escapar(op)}</span>
          </button>`).join('')}
      </div>
      <div id="feedback" aria-live="polite"></div>
    </article>
  `);

  tela.querySelector('[data-voltar]').addEventListener('click', () => {
    if (confirm('Sair do quiz? Seu progresso nesta tentativa será perdido.')) telaInicio();
  });
  tela.querySelectorAll('[data-opcao]').forEach((b) =>
    b.addEventListener('click', () => responder(Number(b.dataset.opcao))));
}

function responder(escolha) {
  const q = quiz.modulo.quiz[quiz.indice];
  const acertou = escolha === q.correta;
  if (acertou) quiz.acertos++;

  tela.querySelectorAll('[data-opcao]').forEach((b) => {
    const i = Number(b.dataset.opcao);
    b.disabled = true;
    if (i === q.correta) b.classList.add('certa');
    else if (i === escolha) b.classList.add('errada');
  });

  const ultima = quiz.indice === quiz.modulo.quiz.length - 1;
  document.getElementById('feedback').innerHTML = `
    <div class="feedback ${acertou ? 'ok' : 'erro'}">
      <strong>${acertou ? 'Resposta certa!' : 'Não foi dessa vez.'}</strong>
      <p>${q.explicacao}</p>
    </div>
    <div class="navegacao fim">
      <button class="btn" id="btnSeguir">${ultima ? 'Ver resultado' : 'Próxima pergunta'} ${icone('seta')}</button>
    </div>`;
  const seguir = document.getElementById('btnSeguir');
  seguir.focus();
  seguir.addEventListener('click', () => {
    if (ultima) telaResultado();
    else { quiz.indice++; telaPergunta(); }
  });
}

// =========================================================
// TELA: RESULTADO DO QUIZ
// =========================================================
function telaResultado() {
  const { modulo, acertos } = quiz;
  const total = modulo.quiz.length;
  const aprovado = acertos >= minimoAcertos(modulo);
  const anterior = estado.progresso[modulo.id] || { melhor: 0, concluido: false };
  const recorde = anterior.melhor > 0 && acertos > anterior.melhor;

  estado.progresso[modulo.id] = {
    melhor: Math.max(anterior.melhor, acertos),
    concluido: anterior.concluido || aprovado,
  };
  salvar();

  const proximo = MODULOS[MODULOS.indexOf(modulo) + 1];

  let titulo, msg;
  if (acertos === total) {
    titulo = 'Gabaritou!'; msg = 'Você acertou todas as perguntas e conquistou a medalha deste módulo.';
  } else if (aprovado) {
    titulo = 'Módulo concluído!'; msg = 'Muito bem! Você conquistou a medalha deste módulo.';
  } else {
    titulo = 'Quase lá!'; msg = `Você precisa de pelo menos ${minimoAcertos(modulo)} acertos. Revise a lição e tente de novo.`;
  }

  let acoes;
  if (!aprovado) {
    acoes = `<button class="btn btn-secundario" data-acao="licao">Revisar a lição</button>
             <button class="btn" data-acao="refazer">Tentar de novo</button>`;
  } else if (trilhaCompleta()) {
    acoes = `<button class="btn btn-secundario" data-acao="refazer">Refazer quiz</button>
             <button class="btn btn-destaque" data-acao="certificado">${icone('diploma')} Emitir certificado</button>`;
  } else {
    acoes = `<button class="btn btn-secundario" data-acao="inicio">Ver trilha</button>
             ${proximo ? `<button class="btn" data-acao="proximo">Próximo: ${proximo.titulo} ${icone('seta')}</button>` : ''}`;
  }

  mostrar(`
    <section class="caixa resultado ${aprovado ? 'ok' : 'pendente'}">
      <div class="resultado-medalha">${icone(modulo.icone)}</div>
      <h2 tabindex="-1" data-foco>${titulo}</h2>
      <p class="nota">${modulo.titulo}</p>
      ${anel(Math.round((acertos / total) * 100), `${acertos}/${total}`, 'acertos')}
      <p class="placar-grande">+${acertos * PONTOS_POR_ACERTO} pontos${recorde ? ' · novo recorde!' : ''}</p>
      <p>${msg}</p>
      <div class="navegacao centro">${acoes}</div>
    </section>
  `);

  const acoesMap = {
    licao: () => telaLicao(modulo.id, 0),
    refazer: () => iniciarQuiz(modulo.id),
    inicio: telaInicio,
    proximo: () => telaLicao(proximo.id, 0),
    certificado: telaCertificado,
  };
  tela.querySelectorAll('[data-acao]').forEach((b) =>
    b.addEventListener('click', acoesMap[b.dataset.acao]));
}

// =========================================================
// TELA: CERTIFICADO
// =========================================================
function telaCertificado() {
  if (!trilhaCompleta()) return telaInicio();

  const data = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  const nome = estado.nome;
  const vazio = '________________________';

  mostrar(`
    ${migalha('Certificado')}

    <div class="caixa nao-imprimir">
      <label for="nomeAluno" class="rotulo">Digite seu nome completo para o certificado:</label>
      <div class="linha-form">
        <input id="nomeAluno" type="text" maxlength="80" value="${escapar(nome)}" placeholder="Seu nome" data-foco>
        <button class="btn" id="btnImprimir">${icone('impressora')} Imprimir / Salvar PDF</button>
      </div>
    </div>

    <div class="certificado">
      <div class="cert-borda">
        <div class="cert-topo">${LOGO}<span>Finanças Cidadãs</span></div>
        <h2>Certificado de Conclusão</h2>
        <p>Certificamos que</p>
        <p class="cert-nome" id="certNome">${escapar(nome) || vazio}</p>
        <p>concluiu a <strong>Trilha de Educação Financeira</strong>, com aproveitamento de
           <strong>${pontosTotais()} de ${pontosMaximos()} pontos</strong>, nos seguintes módulos:</p>
        <ul class="cert-modulos">
          ${MODULOS.map((m) => `<li>${icone(m.icone)} ${m.titulo}</li>`).join('')}
        </ul>
        <p class="cert-data">${data}</p>
      </div>
    </div>
  `);

  tela.querySelector('[data-voltar]').addEventListener('click', telaInicio);
  const input = document.getElementById('nomeAluno');
  input.addEventListener('input', () => {
    estado.nome = input.value;
    salvar();
    document.getElementById('certNome').textContent = input.value.trim() || vazio;
  });
  document.getElementById('btnImprimir').addEventListener('click', () => {
    if (!input.value.trim()) {
      alert('Digite seu nome antes de imprimir.');
      input.focus();
      return;
    }
    window.print();
  });
}

// ---------------- Início ----------------
telaInicio();
