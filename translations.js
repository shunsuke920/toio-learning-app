const TRANSLATIONS = {
  en: {
    'go': '🚶',
    'back': '⬇️',
    'right': '↪️',
    'left': '↩️',
    'stop': '⛔',
    'go straight': '🚶',
    'hurry up and go straight': '🏃',

  },
  es: {
    've': '🚶',
    'regresa': '⬇️',
    'derecha': '↪️',
    'izquierda': '↩️',
    'detente': '⛔',
    've recto': '🚶',
    'gira a la derecha': '↪️',
    'gira a la izquierda': '↩️',
    'da la vuelta': '↩️↩️',
    'avanza y gira a la derecha': '🚶↪️',
    'avanza y gira a la izquierda': '🚶↩️',
    'apresúrate y ve recto': '🏃‍♂️💨',
    'avanza sin dudar': '🏃‍♂️💨',
    'sigue recto': '🏃‍♂️💨🔥',
    'dirígete hacia el norte': '🚶',
    'tómatelo con calma y ve recto': '🚶',
    'avanza a un ritmo lento': '🐢',
    'gira hacia tu derecha': '↪️',
    'gira hacia tu izquierda': '↩️',
    'da un paso atrás': '⬇️',
    've recto y gira a la derecha': '🚶↪️',
    've recto y gira a la izquierda': '🚶↩️',
    'gira a la izquierda y ve recto': '↩️🚶',
    'gira a la derecha y ve recto': '↪️🚶',
    'muévete suavemente': '🚶‍♂️…',
    'muévete despacio': '🚶‍♂️…',
    'avanza lentamente': '🚶‍♂️…',
    'camina despacio': '🚶‍♂️…',
    'muévete rápido': '🏃‍♂️',
    'corre rápido': '🏃‍♂️💨💨',
    'gira rápidamente': '↪️↪️',
    'gira con calma': '↪️...'
  },
  ko: {
    // ✅ beginner
  '가': '🚶',
  '돌아가': '⬇️',
  '오른쪽': '↪️',
  '왼쪽': '↩️',
  '멈춰': '⛔',

  // ✅ intermediate
  '직진해': '🚶',
  '오른쪽으로 돌아': '↪️',
  '왼쪽으로 돌아': '↩️',
  '유턴해': '↩️↩️',
  '앞으로 가서 오른쪽으로 돌아': '🚶↪️',
  '앞으로 가서 왼쪽으로 돌아': '🚶↩️',

  // ✅ advanced
  '서둘러서 직진해': '🏃‍♂️💨',
  '망설이지 말고 가': '🏃‍♂️💨',
  '계속 직진해': '🏃‍♂️💨🔥',
  '북쪽으로 가': '🚶',
  '천천히 직진해': '🚶',
  '느린 속도로 가': '🐢',
  '오른쪽으로 꺾어': '↪️',
  '왼쪽으로 꺾어': '↩️',
  '한 걸음 물러서': '⬇️',
  '직진하고 오른쪽으로 돌아': '🚶↪️',
  '직진하고 왼쪽으로 돌아': '🚶↩️',
  '왼쪽으로 돌고 직진해': '↩️🚶',
  '오른쪽으로 돌고 직진해': '↪️🚶',

  // ✅ movement nuance
  '부드럽게 움직여': '🚶‍♂️…',
  '천천히 움직여': '🚶‍♂️…',
  '천천히 나아가': '🚶‍♂️…',
  '느릿하게 걸어': '🚶‍♂️…',
  '빨리 움직여': '🏃‍♂️',
  '빠르게 달려': '🏃‍♂️💨💨',
  '빠르게 돌아': '↪️↪️',
  '차분하게 돌아': '↪️...'
  },
  zh: {
  // 🟢 初級 (beginner)
  '走': '🚶',             // go / walk
  '回来': '⬇️',           // come back
  '右转': '↪️',           // turn right
  '左转': '↩️',           // turn left
  '停': '⛔',             // stop

  // 🟡 中級 (intermediate)
  '直走': '⬆️',             // go straight
  '向右转': '↪️',           // turn right
  '向左转': '↩️',           // turn left
  '往回走': '🔙',           // go back
  '走然后右转': '➡️↪️',     // move and turn right
  '走然后左转': '➡️↩️',     // move and turn left

  // 🔴 上級 (advanced)
'快点直走': '🏃‍♂️💨',         // hurry up and go straight
'毫不犹豫地前进': '🏃‍♂️💨',     // move forward without hesitation
'继续直走': '🏃‍♂️💨',           // keep going straight
'朝北走': '🚶',                // head north（中立）
'慢慢走直线': '🚶‍♂️…',         // take it easy and go straight
'慢慢往前走': '🚶‍♂️…',         // go forward at a slow pace
'向你的右边转': '↪️',          // turn to your right
'向你的左边转': '↩️',          // turn to your left
'后退一步': '⬇️',              // take a step back
'直走然后右转': '🚶↪️',         // go straight and turn right
'直走然后左转': '🚶↩️',         // go straight and turn left
'左转然后直走': '↩️🚶',         // turn left and go straight
'右转然后直走': '↪️🚶',         // turn right and go straight


  // movement nuance
  '轻轻地移动': '🚶‍♂️…',        // move gently
'慢慢地移动': '🚶‍♂️…',        // move slowly
'缓慢地前进': '🐢',            // very slow forward
'慢慢地往前走': '🚶‍♂️…',      // move forward slowly
'快速移动': '🏃‍♂️💨',         // move fast
'快速奔跑': '🏃‍♂️💨',         // run quickly
'慢慢走路': '🚶‍♂️…',          // walk slowly
'迅速转身': '↪️...'            // turn around quickly
  }
};



//間違えやすい表現を吸収した
const ALIASES = {

// --- "turn right" 系 ---
  "turn write": "turn right",
  "turn light": "turn right",          // よくある誤認識（l/r混乱）
  "turn the right way": "turn right",  // 意図は合っている
  "turn right now": "turn right",
  "turn to the right": "turn right",
  "can you turn right": "turn right",

  // --- "turn left" 系 ---
  "turn lift": "turn left",
  "turn left now": "turn left",
  "turn to the left": "turn left",
  "can you turn left": "turn left",

  // --- "go straight" 系 ---
  "go strait": "go straight",     // スペルミスだけど意味は合ってる
  "go street": "go straight",     // 音が似てる

  // --- "move forward slowly" 系 ---
  "move slowly": "move forward slowly",
  "go forward slowly": "move forward slowly",

  // --- "take a step back" 系 ---
  "step back": "take a step back",

  // --- "stop" 系 ---
  "stock": "stop",
  "stopped": "stop",

  // --- "go" 系 ---
  "goal": "go",

  // --- "progress slowly" 系 ---
  "progress slow": "progress slowly"
};

const ALIASES_ES = {
  // --- "regresa" 系 ---
  "regressa": "regresa",
  "regrasa": "regresa",
  "re gresa": "regresa",

  // --- "ve recto" 系 ---
  "ve rectal": "ve recto",
  "v recto": "ve recto",
  "be recto": "ve recto",

  // --- "gira a la derecha" 系 ---
  "gira a la dere ha": "gira a la derecha",
  "gira la derecha": "gira a la derecha",
  "gira derecha": "gira a la derecha",

  // --- "gira a la izquierda" 系 ---
  "gira a la isquierda": "gira a la izquierda",
  "gira izquierda": "gira a la izquierda",

  // --- "detente" 系 ---
  "deténte": "detente",
  "detente ya": "detente",

  // --- "avanza a un ritmo lento" 系 ---
  "avanza lento": "avanza a un ritmo lento",
  "ve despacio": "avanza a un ritmo lento"
};

