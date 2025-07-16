// ----------------------- variables ----------------------- 

const allWords = ['mesa', 'na', 'gato', 'cachorro', 'do', 'janela', 'rua', 'vou', 'barco', 'tempo', 'chuva', 'um', 'folha', 'pedra',
    'livro', 'um', 'escola', 'lá', 'vou', 'estrada', 'flor', 'a', 'tijolo', 'madeira', 'luz', 'escuro', 'fala', 'novo', 'caderno', "muito",
    'cai', 'sapato', 'planta', 'o', 'a', 'oi', 'aquele', 'garrafa', 'vela', 'banco', 'quadro', 'camisa', 'a', 'cadeira', 'o', 'mochila', 
    'gente', 'oi', 'ei', 'um', 'ruan', 'cadeira', 'lareira', 'mata', 'feliz', 'o', 'binócolos', 'mamadeira', 'de', 'o', 'a', 'de',
    'de', 'da', 'que', 'que', 'do', 'do', 'em', 'em', 'um', 'para', 'para', 'para', 'é', 'é', 'e', 'e', 'com', 'com', 'sim', 'sim',
    'cobra', 'rio', 'uma', 'uma', 'os', 'as', 'aqueles', 'deles', 'delas', 'vida', 'mas', 'mas', 'há', 'quando', 'ser', 'seu', 'sua',
    'foi', 'ao', 'como', 'como', 'mas', 'mas', 'as', 'foi', "ao", "ele", "das", "tem", "a", "seu", "sua", "ou", "ser", "quando",
    "há", "nos", "já", "está", "eu", "também", "só", "pelo", "pela", "até", "isso", "entre", "era", "depois", "sem", "mesmo", "aos",
    "ter", "seus", "quem", "nas", "me", "esse", "ela", "num", "foram", "essa", "numa", "nem", "suas", "meu", "as", "minha",
    "numa", "onde", "quem", "esse", "porque", "nós", "tenho", "qual", "será", "eles", "seja", "tudo", "todos", "tinha",
    "cada", "fazer", "tão", "bem", "vou", "disse", "vez", "estão", "coisa", "todos", "tempo", "vida", "dia", "homem", "pode",
    "a","o","é","e","se","de","com","me","por","nós","ele","ela","não","sim","para","casa","pai","eles","ser", "vizinha",
    "dia","mãe","bom","carro","em","mais","amo","ar","dois","mas","noite","ou","sei","sol","como","cor","mão","faz",
    "mar","meu","tem","água","aqui","por que","quando","uma","bem","cinco","onde","sete","dez","lua","seu", "viciou",
    "fazer","olho","azul","branco","cabeça","rua","escola","menos","pés","preto","terra","cão","cem","ler","país","seis",
    "tarde","vermelho","até","homem","mil","nada","nunca","oeste","palavra","sempre","som","verde","ano","dar","livro",
    "muito","andar","chuva","deu","dinheiro","mesa","rio","trabalho","agora","dizer","este","pode","vida","cidade","coisa",
    "depois","entre","foi","são","sob","tempo","claro","frio","luz","porta","também","antes","árvore","escrever","olhar", 
    "como", "alguns", "teve", "a partir", "quente", "palavra", "alguns", "quiz", "um", "começar", 'e', 'e', 'e',
    "lata", "fora", "outro", "foram", "conjunto", "quer", "ar", "jogar", "pequeno", 'lá', 'e', 'e', "agrediu",
    "fim", "colocar", "mão", "pote", "grande", "soletrar", "adicionar", "terra", "necessário", "alto", 'e', "careta",
    "tais", "siga", "ato", "por que", "perguntar", "homens", "mudança", "fui", "luz", "tipo", 'um', 'e', "pino",
    "precisa", "imagem", "tentar", "novamente", "animais", "ponto", "mundo", "perto", "construir", "auto", "correu",
    "país", "qualquer", "novo", "trabalho", "parte", "tomar", "obter", "lugar", "feito", "viver", 'e', "que",
    "encontrar", "exposição", "nome", "através", "justo", "forma", "sentença", "acho", "ajudar", "baixo", "parafuso",
    "linha", "diferir", "causa", "significar", "mudança", "direito", "menino", "velho", "ela", "tudo", "bateu",
    "lá", "up", "usar", "maneira", "sobre", "escrever", "faria", "coisa", "veja", "número", 'sim', "vinho",
    "não", "pessoas", "seu", "chamada", "primeiro", "encontrado", "resposta", "escola", "crescer", "estudo", "aprender",
    "planta", "cobertura", "alimentos", "sol", "quatro", "entre", "estado", "manter", "olho", "nunca", "último", "longa",
    "fazer", "isto", "elogio", "grande", "antes", "corrida", "não", "passo", "parar", 'a', 'a', 'a', 'a', 'a', 'a', 'o',
    "semelhante", "personagem", "ação", "verbo", "seguir", "perto", "centro", "preguiça", "deixo", "diferente",
    "brincar", "seleção", "sentar", "dentro", "amor", "preto", "texto", "quatro", "muro", "morar", "nasceu",
    "visita", "voz", "energia", "causa", "mãe", "lado", "pegar", "conselho", "chuva", "litoral", "o", "sinto",
    "milagre", "humano", "história", "efeito", "linha", "argumento", "roda", "criar", "vizinho", "lavar", "secou",
    "roupa", "cair", "números", "nota", "pelas", "durante", "plano", "criar", "meio", 'o', "cozinhar", "velha",
    "história", "pergunta", "triste", "riso", "suporte", "cópia", "morrer", "certo", "terra", "roupa", "velho",
    "sentido", "hora", "promessa", "pagar", "você", "o", "o", "sabia", "branco", "pequena", "cadáver", "local",
    "italiano", "música", "nível", "oferta", "rosto", "a", "a", "manhã", "imediato", "pegar", "mão", "rumo", 'o', 'o',
    "conseguir", "espécie", "início", "número", "exemplo", "conhecer", "água", "árvore", "cidade", "falou", "malha",
    "sentir", "mundo", "dia", "ideal", "salvar", "guerra", "leitura", "hoje", "andar", 'o', "piranha", "pirata",
    "força", "ferida", "aparecer", "vara", "medo", "unir", "fica", "receber", "proteger", "cabeça", "que", "olhou",
    "acabou", "pé", "nome", "tensão", "lição", "será", "a", "a", "apontar", "fornecedor", "visto", "pulmão", 'o',
    "chuva", "vento", "jardim", "alegre", "negar", "marcar", "viagem", "feliz", 'letícia', "boi", "pesca", "fazendeiro",
    "caminho", "descer", "mais", "amanhã", "risco", "sabor", "cabelo", "grupo", "célula", "copiar", "siqueira",
    "correr", "medida", "lógica", "preparar", "chuva", "como", "subir", "corpo", "combinar", "passar", "quadro", "fato", "relação", "língua", "resposta", "direção",
    "filho", "expressão", "comum", "repetir", "emoção", "memória", "ponto", "final", "sinal", "certo", "construção",
    "claro", "livre", "segundo", "parte", "material", "correto", "base", "teoria", "cultura", "necessário", "amei",
    "modelo", "reunião", "sistema", "função", "posição", "nível", "meta", "regra", "imagem", "situação", "cinema",
    "forma", "estrutura", "ordem", "natureza", "tipo", "característica", "ideia", "valor", "realidade", "difícil",
    "possível", "importante", "diferença", "próprio", "melhor", "verdade", "maior", "capacidade", "prática", "conhecimento",
    "significado", "educação", "razão", "condição", "recurso", "conclusão", "processo", "função", "responsável",
    "tecnologia", "sociedade", "atitude", "opinião", "desenvolvimento", "relevante", "respeito", "atual", "atual",
    "exemplo", "informação", "comunicação", "papel", "explicação", "abordagem", "projeto", "iniciativa", "resultado",
    "propor", "planejar", "executar", "avaliar", "analisar", "identificar", "sugerir", "organizar", "refletir", "descrever", "acontecer",
    "participar", "aprender", "compartilhar", "transformar", "incluir", "considerar", "reconhecer", "aceitar", "crer",
    "permitir", "resolver", "representar", "demonstrar", "manifestar", "contribuir", "manter", "superar", "prever", "confirmar",
    "resumir", "fortalecer", "melhorar", "avaliar", "medir", "planejamento", "estratégia", "objetivo", "metodologia", "dados",
    "técnica", "indicador", "eficácia", "qualidade", "quantidade", "variável", "computador", "fogo", "fuga", "fazenda",
    "fator", "impacto", "perspectiva", "abordar", "contexto", "complexo", "simples", "elemento", "campo", "galinha",
    "área", "ambiente", "dimensão", "limite", "escopo", "alcance", "parceria", "rede", "interação", "comportamento",
    "desafio", "solução", "proposta", "tema", "tópico", "conteúdo", "resposta", "pergunta", "diálogo", "debate",
    "argumento", "conflito", "consenso", "postura", "visão", "missão", "valor", "ética", "moral", "direito",
    "justiça", "cidadania", "governo", "estado", "política", "lei", "constituição", "regulamento", "norma", "sociedade",
    "comunidade", "grupo", "indivíduo", "público", "privado", "coletivo", "social", "ambiental", "cultural",
    "a","o","e","de","que","do","da","em", "a", "a", "um","para","é","com","não","uma","os","no","se","na","por","mais",
    "as","dos","como","mas","foi","ao","ele","das","tem","seu","sua","ou","ser","quando","muito","há","nos",
    "já","está","eu","também","só","pelo","pela","até","isso","entre","era","depois","sem","mesmo","aos","ter","seus",
    "quem","nas","me","esse","ela","num","foram","essa","numa","nem","suas","meu", "minha", "onde","porque",
    "agora","tudo","nós", "tão","ainda","outro","cada","algum","alguma","muitas","muitos","alguns","algumas", "errada",
    "todas","todos","nada","ninguém","vida","ano","tempo","dia","homem","mulher","casa","cidade","país","mão","olho",
    "mundo","certo","parte","coisa","forma","lado","trabalho","pessoa","forma","fim","lei","governo","estado","país",
    "fato","hora","momento","história","palavra","lugar","vida","mundo","coração","filho","mãe","pai","amigo","cidade",
    "carro","água","terra","fogo","ar","céu","mar","rio","flor","árvore","animal","vento","festa","música","noite",
    "sol","lua","estrela","olhar","sentir", "andar","falar","ver","ouvir","comer","beber","viver","amar","gostar","querer",
    "poder","dever","saber","achar","precisar","trazer","levar","fazer","dizer","vir","ir","chegar","partir","voltar",
    "ficar","começar","terminar","pensar","esperar","achar","perder","ganhar","abrir","fechar","entrar","sair","ficar",
    "sentar","levantar","correr","andar","voar","nadar","brincar","trabalhar","estudar","ler","escrever","ouvir","ver",
    "achar","pensar","saber","querer","gostar","amar","odiar","sentir","rir","chorar","sonhar","acordar","dormir","cantar",
    "dançar","viajar","ajudar","esperar","falar","ouvir","ver","querer","fazer","ter","estar","ser","ir","vir","ficar",
    "dar","receber","pedir","mostrar","contar","pagar","comprar","vender","abrir","fechar","deixar","pegar","levar",
    "usar","precisar","amar","odiar","querer","gostar","saber","dizer","achar","pensar","sentir","ver","ouvir","falar",
    "andar","correr","pular","sentar","levantar","trabalhar","estudar","ler","escrever","cantar","dançar","viajar",
    "ajudar","esperar","dormir","acordar","sonhar","rir","chorar","brincar","amar","odiar","querer","gostar","saber",
    "dizer","achar","pensar","sentir","ver","ouvir","falar","andar","correr","pular","sentar","levantar","trabalhar",
    "estudar","ler","escrever","cantar","dançar","viajar","ajudar","esperar","dormir","acordar","sonhar","rir","chorar",
    "brincar","feliz","triste","grande","pequeno","bom","mau","novo","velho","quente","frio","claro","escuro","longo",
    "curto","difícil","fácil","rápido","devagar","forte","fraco","alto","baixo","gordo","magro","rico","pobre","sim",
    "não","talvez","sempre","nunca", "vezes","hoje","ontem","amanhã","agora","depois","antes","aqui","lá","ali",
    "em cima","embaixo","dentro","fora","perto","longe","certo","errado","verdade","mentira","amigo","inimigo","pai",
    "mãe","filho","filha","irmão","irmã","tio","tia","primo","prima","avó","neto","neta","vizinho","vizinha",
    "professor","aluno","médico","enfermeiro","policial","advogado","juiz","artista","músico","ator","atriz","escritor",
    "jornalista","engenheiro","cientista","programador","motorista","cozinheiro","empresário","presidente","rei","rainha",
    "senhor","senhora","menino","menina","beber","criança","adolescente","adulto","idoso","animal","cachorro","gato",
    "pássaro","peixe","cavalo","vaca","porco","ovelha","leão","tigre","elefante","urso","coelho","rato","macaco","cobra",
    "árvore","flor","folha","grama","areia","pedra","montanha","vale","rio","lago","oceano","ilha","praia","floresta",
    "cidade","vila","bairro","rua","avenida","praça","casa","apartamento","quarto","banheiro","cozinha","sala","jardim",
    "escola","universidade","hospital","igreja","loja","mercado","restaurante","bar","cinema","teatro","museu","parque",
    "estação","aeroporto","rodoviária","carro","bicicleta","moto","trem","avião","navio","barco", "pobre", "milha",
    "tempo","clima","sol","chuva","vento","neve","tempestade","nuvem","céu","terra","água","fogo","ar","pedra",
    "metal","madeira","plástico","vidro","papel","roupa","sapato","chapéu","óculos","relogio","joia","dinheiro","carteira",
    "chave","telefone","computador","internet","email","mensagem","amigo","amor","amizade","paz","guerra","trabalho",
    "festa","viagem","feriado","fim","começo","dia","noite","hora","minuto","segundo","vida","morte","felicidade",
    "tristeza","medo","raiva","alegria","esperança","sonho","realidade","verdade","mentira","história","cultura",
    "arte","música","literatura","cinema","teatro","dança","esporte","jogo","futebol","basquete","natação","corrida",
    "natação","xadrez","futebol","corrida","natação","xadrez", "a", "o", 'amar'    
];
let pressedKey;
let stringWords = '';
let letterIndex = 0;
let wordIndex = 0;
let timerId;
let eraseWord;
let typoCount = 0;
let correctCharCount = 0;
let deadPressed;
let gameOn = false;
let ctrlBackspace = false;

let recordWPM = JSON.parse(localStorage.getItem('record')) || 0;
let perfectAccuracyCount = JSON.parse(localStorage.getItem('accuracyCount')) || 0;

// ----------------------- code to run -----------------------

getRandomWords();
setTimeout(() => {
  document.querySelector('.fa-redo-alt').classList.add('words-show');
}, 500);


// ----------------------- functions -----------------------

// ***
function moveCaret() {
  const caret = document.querySelector('.caret');
  if (!caret) return;

  const allWordSpans = document.querySelectorAll('.js-words > span.word');

  if ((!timerId) && (letterIndex === 0)) {
    caret.classList.add('caret-animation');
  } else {
    caret.classList.remove('caret-animation');
  }
  
  const currentWord = allWordSpans[wordIndex];
  const letterSpans = currentWord.querySelectorAll('span');

  // *****
  if (letterIndex < letterSpans.length) {
    const targetLetter = letterSpans[letterIndex];
    caret.style.top = `${targetLetter.offsetTop}px`;
    caret.style.left = `${targetLetter.offsetLeft}px`;
  } else {
    const lastLetter = letterSpans.length > 0 ? letterSpans[letterSpans.length - 1] : currentWord;
    caret.style.top = `${lastLetter.offsetTop}px`;
    caret.style.left = `${lastLetter.offsetLeft + lastLetter.offsetWidth}px`;
  }
}

function getRandomWords() {
  letterIndex = 0;
  wordIndex = 0;
  let startingWords = [];
  stringWords = '';
  gameOn = false;

  for (let i = 0; i < allWords.length; i++) {
    let aux = Math.floor(Math.random() * allWords.length);
    startingWords.push(allWords[aux]);
    stringWords += `${startingWords[i]} `;
  }

  const withSpan = stringWords
    .split(' ')
    .map(word => {
      const letterSpan = word
        .split('')
        .map(letter => `<span>${letter}</span>`)
        .join('');
      return `<span class="word">${letterSpan}</span>`;
    })
    .join(' ');

  const wordsContainer = document.querySelector('.js-words'); // gbh *****
  wordsContainer.classList.remove('words-show');

  setTimeout(() => {
    // clearer way *****
    wordsContainer.innerHTML = withSpan; // 1. Add words
    wordsContainer.insertAdjacentHTML('beforeend', '<div class="timer js-timer"></div>'); // 2. Add timer
    wordsContainer.insertAdjacentHTML('afterbegin', '<div class="caret"></div>'); // 3. Add caret

    wordsContainer.classList.add('words-show');
    wordsContainer.classList.remove('words-overflow');

    tagLines();
    moveCaret(); // ***
  }, 500);

  clearInterval(timerId);
  timerId = false;

  typoCount = 0;
  correctCharCount = 0;
}

function startGame() {
  let timer = 30;
  gameOn = true;
  document.querySelector('.js-timer').innerText = timer;
  timerId = setInterval(() => {
    timer -= 1;
    document.querySelector('.js-timer').innerText = timer;
    if (timer === 0) {
      clearInterval(timerId);
      gameOn = false;
      document.querySelector('.js-words').classList.remove('words-show');
      document.querySelector('.js-timer').style.opacity = '0';
      gameResult();
    }
  }, 1000);
}

function gameResult() {
  // ****
  const caret = document.querySelector('.caret');
  if (caret) {
    caret.style.display = 'none';
  }

  let wpm = (correctCharCount / 5) / 0.5;
  const totalWords = correctCharCount + typoCount;
  let accuracy = (correctCharCount / totalWords) * 100;
  recordWPM = saveRecord(recordWPM, wpm);
  countAccuracy(accuracy);
  let html = `
    <div class="game-result">
      <h3 class="wpm">
        <div class="record">recorde ${recordWPM.toFixed(1)}</div>
        wpm ${wpm.toFixed(1)}
        <div class="info">palavras por minuto</div>
      </h3> 
      <h3 class="accuracy">
        <div class="record">precisões perfeitas ${perfectAccuracyCount}</div>
        precisão ${accuracy.toFixed(2)}%
        <div class="info">porcentagem de acertos</div>
      </h3>
      <h3 class="typo">
        typos ${typoCount}
        <div class="info">erros de digitação</div>
      </h3>
    </div>`;
  setTimeout(() => {
    document.querySelector('.js-words').innerHTML = html;
    document.querySelector('.js-words').classList.add('words-show');
    document.querySelector('.js-words').classList.add('words-overflow');
  }, 500);
}

function tagLines() {
  const wordSpans = document.querySelectorAll('.js-words > span.word');
  if(wordSpans.length === 0) return; // ****
  let currentLine = 0;
  let baseTop = wordSpans[0].offsetTop;

  wordSpans.forEach(span => {
    if (span.offsetTop !== baseTop) {
      currentLine++; // ***
      baseTop = span.offsetTop;
    }
    span.dataset.line = currentLine; // ex.: data-line="0", "1", "2"…
  });
}

function checkWordPressed() {
  if ((!timerId) && (letterIndex === 0)) {
    startGame();
  }

  if (gameOn) {
    let spanLetter = document.querySelectorAll('.js-words > span')[wordIndex]?.querySelectorAll('span')[letterIndex]; // ? ***
    let letter = ' '
    if (spanLetter) {
      letter = spanLetter.innerText;
    };

    if ((pressedKey === ' ') && (letterIndex > 0)) {
      correctCharCount += 1;
      wordIndex += 1;
      letterIndex = 0;
    } else if (pressedKey === letter) {
      if (deadPressed) {
        correctCharCount += 1;
        deadPressed = false;
      }
      correctCharCount += 1;
      spanLetter.classList.add('right-key-pressed');
      letterIndex += 1;
    } else if (ctrlBackspace) {
      letterIndex = 0;
      document.querySelectorAll('.js-words > span')[wordIndex].querySelectorAll('span').forEach((letters) => {
        letters.classList.remove('wrong-key-pressed');
        letters.classList.remove('right-key-pressed');
      });
      ctrlBackspace = false;
    } else if (pressedKey === 'Backspace') {
      if (wordIndex === 0 && letterIndex === 0) {
        return;
      }
      letterIndex -= 1;
      if (letterIndex < 0) { // ***
         if (wordIndex > 0) {
            wordIndex -= 1;
            let prevWordSpans = document.querySelectorAll('.js-words > span.word')[wordIndex].querySelectorAll('span');
            letterIndex = prevWordSpans.length;
         } else {
            letterIndex = 0; // ***
         }
      }
      spanLetter = document.querySelectorAll('.js-words > span.word')[wordIndex]?.querySelectorAll('span')[letterIndex]; // ? ***
      if (spanLetter) {
        spanLetter.classList.remove('wrong-key-pressed');
        spanLetter.classList.remove('right-key-pressed');
      }
    } else {
      if (spanLetter) {
        spanLetter.classList.add('wrong-key-pressed');
        letterIndex += 1;
        typoCount += 1;
      }
    }


    if (pressedKey === ' ') { // ***
      const words = document.querySelectorAll('.js-words > span.word');
      const lastTyped = words[wordIndex - 1];
      if (!lastTyped) return; // ****
      const lineOfLast = Number(lastTyped.dataset.line);
      const stillInSameLine = Array.from(words)
        .slice(wordIndex) // ***
        .some(span => Number(span.dataset.line) === lineOfLast);

      if (!stillInSameLine && lineOfLast > 0) { // ***
        words.forEach(span => {
          if (Number(span.dataset.line) === lineOfLast - 1) { // ***
            span.style.display = 'none';
          }
        });
      }
    }
    moveCaret(); // ***
  }
}

function saveRecord(record, score) {
  if (score > record) {
    record = score;
  }
  localStorage.setItem('record', JSON.stringify(record));
  return record;
}

function countAccuracy(accuracy) {
  if (accuracy === 100) {
    perfectAccuracyCount += 1;
  }
  localStorage.setItem('accuracyCount', JSON.stringify(perfectAccuracyCount));
}

// ----------------------- EventListeners ----------------------- 

document.body.addEventListener('keydown', (event) => {
  let legalKey;
  const deleteKeyEvents = ['Dead', 'Shift', 'Enter', 'Control', '.', ',', ';', '/', 'Tab', 'CapsLock', 'F5', 'Alt', 'AltGraph'];
  for (let i = 0; i < deleteKeyEvents.length; i++) {
    if (deleteKeyEvents[i] === event.key) {
      legalKey = false;
      break
    } else {
      legalKey = true;
    }
  }

  if ((event.ctrlKey || event.metaKey) && (event.key === 'Backspace')) {
    ctrlBackspace = true;
  }

  if (event.key === 'Dead') {
    deadPressed = true;
  }

  if (legalKey) {
    pressedKey = event.key;
    checkWordPressed();
  }

  if (event.key === 'Enter') {
    getRandomWords();
  }
});

document.querySelector('.js-redo').addEventListener('click', () => {
  getRandomWords();
});