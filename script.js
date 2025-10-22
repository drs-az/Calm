const GRID_SIZE = 12;
const WORD_COUNT = 16;
const DIRECTIONS = [
    [0, 1],   // right
    [1, 0],   // down
    [1, 1],   // down-right
    [1, -1],  // down-left
    [0, -1],  // left
    [-1, 0],  // up
    [-1, 1],  // up-right
    [-1, -1]  // up-left
];

const wordsLibrary = 
    ["able","abound","abounding","abounds","abracadabra","absolute","absolutely","absorbed","absorbing","abundance","abundant","accept","acceptable","acceptance","accepted","accepting","accessible","acclaim","acclaimed","acclamation","accommodate","accommodated","accommodating","accommodation","accomplish","accomplished","accomplishment","accomplishments","accountability","ace","achieving","active","acts of kindness","accuracy","adaptability","adaptable","adaptive","add","addition","adequate","admirable","admirably","admiration","admire","admired","adorable","adore","adored","adoring","adoringly","advanced","advantage","advantageous","advantageously","advantages","adventure","adventuresome","adventurous","affability","affable","affably","affection","affectionate","affinity","affirm","affirmation","affirmative","affluence","affluent","afford","affordable","affordably","ageless","agile","agilely","agility","agree","agreeable","agreeableness","agreeably","aid","aim","air","airness","alacrity","alert","alertness","aligned","alive","aliveness","all is well","allow","allowing","allure","alluring","alluringly","aloha","alternative healing","altrucause","altruism","altruistic","amaze","amazed","amazement","amazes","amazing","amazingly","ambition","ambrosial","amiability","amiable","amicable","amicably","amin","ample","amused","amusing","angel","angelic","animate","animated","animating","animation","anticipation","appeal","appealing","applaud","applause","appreciable","appreciate","appreciated","appreciates","appreciation","appreciative","appreciatively","appreciativeness","appropriate","approval","approve","ardent","ardor","aroused","artistic","art","assertive","assertiveness","assurance","astonished","astonishing","astounding","astronomical","astute","attain","attentive","attentiveness","attraction","attractive","audacity","auspicious","authentic","authenticity","awake","aware","awareness","awe","awed","awesome","awesomeness","balance","balanced","beaming","beatify","beatitude","beautiful","beautifully","beautify","beauty","being at rest","belong","belonging","beloved","benefactor","beneficial","benefit","benefits","benevolence","benevolent","benevolently","best","better","beyond","beyond fabulous","biophilia","blasting","blazing","bless","blessed","blessing","blinding","bliss","blisscipline","blissful","blissfulness","bliss-on-tap","bloom","blossom","bold","boldness","bounteous","bountiful","brave","bravery","breathtaking","breeziness","bright","brightness","brilliance","brilliant","brio","brisk","briskness","bubbling","bullishness","buoyancy","buoyant","busting","calm","campaign","candor","canty","capability","capable","capably","capital","captivating","care","carefulness","caring","cat’s pajamas","celebrate","celebration","centered","certain","certainty","chakra","challenge","champ","champion","change","charisma","charismatic","charitable","charity","charm","charmer","charming","cheerful","cheerfulness","cheerful willingness","cheers","chic","choice","clarity","clean","cleanliness","clear","clear-headed","clever","closeness","collaboration","collected","comfort","comfortable","comforting","comical","comedy","commendable","commitment","communication","communion","community","companionship","compassion","compassionate","compatible","competence","competency","competent","complete","concentration","confidence","confident","congratulations","congruence","connect","connected","connectedness","connection","connoisseur","conquer","conscious","consciousness","conservation","considerate","consideration","consistency","consistent","consolation","content","contentment","continuity","continuous","contribution","convenient","conviction","convincing","cool","cooperation","copacetic","cordial","corking","courage","courageous","courteous","courtesy","covenant","coy","cozy","create","creative","creativeness","creativity","cuddle","cuddling","curiosity","curious","cute","dandy","daring","darling","dazzled","dazzling","dear","debonair","decent","decisiveness","dedicated","delectable","delicate","delicious","deliciousness","delight","delighted","delightful","dependability","desirable","desire","detachment","determination","determined","devoted","devotion","dignity","diligence","diligent","direction","discerning","discipline","discover","discovery","discretion","dishy","disney","diversity","divine","do","dream","dreamy","drive","ducky","duty","dynamic","eager","eagerness","earnest","ease","ease-of-mind","easier","easily","easy","ebullience","ebullient","ecosophy","ecstatic","ecstatify","educate","educated","education","effectiveness","efficacy","efficiency","efficient","effortless","effortlessness","elated","elation","electric","elegance","elegant","elevate","elevated","eloquent","empathize","empathy","emphatic","empower","empowered","empowering","emulate","enable","enabled","enamoring","enchanted","encourage","encouraged","encouragement","endless","endurance","energetic","energize","energy","engage","engaged","engaging","engrossed","enhancing","enjoy","enjoyment","enlightenment","enlivened","enormous","enough","enterprising","enthralled","enthralling","enthusiasm","enthusiastic","enticing","entranced","equality","equanimity","equanimous","equitable","equitably","equity","eternal","eudaemonist","eudaimonia","eudaimonism","eudaimonistic","eunoia","evolve","exaltation","exalting","excellence","excellent","exceptional","excite","excited","excitement","exciting","exemplary","exhilarating","expansive","expectant","experience","experienced","expertise","exploration","expressing","expressiveness","exquisite","exstatisfy","extra","extraordinary","exuberance","exuberant","exultant","eye-catching","fabulous","fair","fairness","faith","faithful","fame","family","fancy","fantabulous","fantastic","fascinate","fascinated","fascinating","favorite","fearless","feasible","feeling good","feistiness","feisty","festive","festiveness","fetching","fidelity","fine","fit","flashy","flattering","flawless","flexibility","flourish","flourishing","flow","flowing","focus","food","forgive","forgiveness","forgiving","fortitude","fortunate","fragrant","free","freecycle","freedom","friend","friendliness","friendly","friendship","frugality","ftw","fulfill","fulfilled","full","fun","funerific","funny jokes","funology","future","gargantuan","generate","generativity","generosity","generous","genial","genius","gentleman","genuine","giddy","gift","gifted","giggling","ginger","give","giving","glad","glamor","glamorous","glorious","glory","glow","glowing","god","goddess","godliness","good","goodness","goodwill","gorgeous","gorgeousness","grace","graceful","gracious","grand","grandiosity","gratefulness","gratitude","great","grateful","groovy","grounded","grow","growth","guidance","guide","guiding","halo","handsome","happily","happiness","happy","hardy","harmonious","harmonize","harmony","healed","healing","health","healthy","heartfelt","heartwarming","heaven","heavenly","heedful","hello","help","helpful","helpfulness","helping","hero","heroism","holiness","holy","honest","honesty","honor","hope","hopefulness","hospitality","hot","huge","human","humble","humor","humorous","hunky-dory","idea","ideal","idealism","illuminated","illumination","illustrious","imagination","imaginative","impressive","improvement","inclusion","incomparable","incredible","independence","industrious","ineffable","infinite","infinity","influence","ingenious","ingenuity","in-love","inner","inner-peace","innocent","innovate","innovation","innovative","inquisitive","insight","insightful","insightfulness","inspiration","inspirational","inspire","inspired","integrity","intelligence","intelligent","intensity","intention","interest","interested","interesting","intimacy","intrepid","intrigued","intuitive","intuitiveness","inventive","inventiveness","investing","invigorate","invigorated","invincible","inviting","involve","involved","irresistible","jammin","joke","jolly","jovial","joy","joyful","joyous","jubilant","jubilingo","judicious","just","justice","juvenesc ent","keen","keep-up","kind","kind-heart","kindly","kindness","kiss","kittens","knowing","knowledge","lamb","laudable","laugh","laughing","lavish","leader","leadership","learn","learning","liberty","life","light","like","limitless","live","lively","living","logic","longevity","lovable","love","lovely","loving","loyal","loyalty","luck","lucky","luminous","luscious","luxuriant","luxury","made","magic","magical","magnificent","majesty","major","many","marvelous","masterful","mastery","maturity","meaning","meaningful","meditation","meliorism","mellow","mench","mercy","merit","mighty","mild","mind-blowing","mindful","mindfulness","mindsight","miracle","miraculous","modesty","more","motivate","motivated","motivation","motivational","moved","movement","mutuality","namaste","natural","nature-made","neat","neoteny","new","nice","nifty","nirvana","noble","nourish","nourished","nourishing","nourishment","nurture","nurturing","obedient","ok","omg","on","oneness","one-pointedness","onwards","open","open-hearted","opening","openly","open-minded","openness","opportunity","optimism","order","organic","outgoing","outstanding","overjoyed","pace","paradise","passion","patience","patient","peace","peaceful","perfect","perfection","perky","persevere","persistence","phenomenal","picturesque","playful","pleasant","pleasure","plentiful","poised","polite","popular","positive","possibility","powerful","praise","precious","precise","premium","prestigious","pretty","priceless","princely","proactive","proficient","profound","progress","prominent","proper","prosper","prosperous","protect","proud","pure","purpose","qualified","quality","quick","quiet","radiant","rational","ready","real","reasonable","receptive","recommend","refined","refreshing","rejoice","relaxed","reliable","relief","remarkable","renewed","renowned","resilient","resourceful","respect","respectful","responsible","responsive","restful","restored","reverence","rewarding","rich","right","robust","romantic","rosy","safe","saintly","salute","sane","satisfying","scrumptious","secure","selective","selfless","sensational","sensible","sensitive","serene","sharp","shimmering","shiny","significant","simple","sincere","skilled","smart","smiling","smooth","sociable","soft","solid","soothing","soulful","sound","sparkling","special","spectacular","speedy","spirited","spiritual","splendid","spontaneous","sporty","spotless","sprightly","stable","staunch","steadfast","steady","stellar","stimulating","stirring","straightforward","strong","studious","stunning","stupendous","stylish","suave","sublime","successful","sufficient","sumptuous","super","superb","superior","supportive","supreme","surreal","survival","sweet","swift","sympathetic","talented","tenacious","terrific","thankful","thorough","thoughtful","thrilled","thrilling","thriving","tidy","timely","titanic","together","tolerant","top-notch","tough","tranquil","transparent","tremendous","trendy","triumphant","true","trusting","trustworthy","truthful","twinkly","ultimate","unabashed","unbiased","unconditional","undamaged","understandable","unencumbered","unfettered","unflappable","unique","unity","unlimited","unrivaled","unselfish","upbeat","uplift","upright","upskill","useful","utmost","valiant","valuable","valued","venerable","verifiable","versatile","vibrant","victorious","vigilant","vigorous","virtuous","visionary","vivacious","vivid","warm","wealthy","welcome","well","whimsical","whole","wholesome","willful","willing","winning","wise","witty","wonderful","wondrous","worthy","wow","yay","youthful","zeal","zen","zest","zing","zippy"]
    
    ;
while (wordsLibrary.length < 1000) {
    wordsLibrary.push(`word${wordsLibrary.length + 1}`); // Placeholder to reach 1000; replace with real words.
}

let selectedWords = [];
let grid = [];
let wordPositions = {};
let selectedCells = [];
let foundWords = new Set();

const startScreen = document.getElementById('start-screen');
const puzzleScreen = document.getElementById('puzzle-screen');
const congratsScreen = document.getElementById('congrats-screen');
const helpButton = document.getElementById('help-button');
const wordList = document.getElementById('word-list');
const gridElement = document.getElementById('grid');
const restartButton = document.getElementById('restart-button');

helpButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hidden');
    puzzleScreen.classList.remove('hidden');
    congratsScreen.classList.add('hidden');

    selectedWords = getRandomWords(WORD_COUNT);
    generateGrid();
    renderWordList();
    renderGrid();
    foundWords.clear();
}

function getRandomWords(count) {
    const filtered = wordsLibrary.filter(word => word.length <= GRID_SIZE);
    const effectiveCount = Math.min(count, filtered.length);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, effectiveCount).map(w => w.toUpperCase());
}

function generateGrid() {
    grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
    wordPositions = {};

    for (const word of selectedWords) {
        placeWord(word);
    }

    // Fill empty cells with random letters
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            if (!grid[i][j]) {
                grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
    }
}

function placeWord(word) {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 100) {
        attempts++;
        const dir = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
        const startRow = Math.floor(Math.random() * GRID_SIZE);
        const startCol = Math.floor(Math.random() * GRID_SIZE);

        if (canPlaceWord(word, startRow, startCol, dir)) {
            for (let k = 0; k < word.length; k++) {
                const r = startRow + k * dir[0];
                const c = startCol + k * dir[1];
                grid[r][c] = word[k];
            }
            wordPositions[word] = { start: [startRow, startCol], dir, length: word.length };
            placed = true;
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    for (let k = 0; k < word.length; k++) {
        const r = row + k * dir[0];
        const c = col + k * dir[1];
        if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE || (grid[r][c] && grid[r][c] !== word[k])) {
            return false;
        }
    }
    return true;
}

function renderWordList() {
    wordList.innerHTML = '';
    selectedWords.forEach(word => {
        const span = document.createElement('span');
        span.classList.add('word');
        span.textContent = word;
        span.dataset.word = word;
        wordList.appendChild(span);
    });
}

function renderGrid() {
    gridElement.innerHTML = '';
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = grid[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            gridElement.appendChild(cell);
        }
    }
    addTouchListeners();
}

function addTouchListeners() {
    let isSelecting = false;
    let startCell = null;

    gridElement.addEventListener('touchstart', (e) => {
        if (e.target.classList.contains('cell')) {
            isSelecting = true;
            selectedCells = [];
            selectCell(e.target);
            startCell = e.target;
        }
    }, { passive: false });

    gridElement.addEventListener('touchmove', (e) => {
        if (isSelecting) {
            e.preventDefault();
            const touch = e.touches[0];
            const target = document.elementFromPoint(touch.clientX, touch.clientY);
            if (target && target.classList.contains('cell') && !selectedCells.includes(target)) {
                const direction = getDirection(startCell, target);
                if (direction) {
                    clearSelection();
                    selectLine(startCell, target, direction);
                }
            }
        }
    }, { passive: false });

    gridElement.addEventListener('touchend', () => {
        if (isSelecting) {
            isSelecting = false;
            checkSelectedWord();
            clearSelection();
        }
    });
}

function selectCell(cell) {
    cell.classList.add('selected');
    selectedCells.push(cell);
}

function clearSelection() {
    selectedCells.forEach(cell => cell.classList.remove('selected'));
    selectedCells = [];
}

function getDirection(start, end) {
    const dr = parseInt(end.dataset.row) - parseInt(start.dataset.row);
    const dc = parseInt(end.dataset.col) - parseInt(start.dataset.col);
    const dist = Math.max(Math.abs(dr), Math.abs(dc));
    if (dist === 0) return null;
    const dir = [Math.sign(dr), Math.sign(dc)];
    // Check if it's one of the allowed directions
    for (const d of DIRECTIONS) {
        if (d[0] === dir[0] && d[1] === dir[1]) {
            return { dir: d, dist };
        }
    }
    return null;
}

function selectLine(start, end, { dir, dist }) {
    let r = parseInt(start.dataset.row);
    let c = parseInt(start.dataset.col);
    for (let k = 0; k <= dist; k++) {
        const cell = gridElement.querySelector(`[data-row="${r}"][data-col="${c}"]`);
        selectCell(cell);
        r += dir[0];
        c += dir[1];
    }
}

function checkSelectedWord() {
    const selectedLetters = selectedCells.map(cell => cell.textContent).join('');
    const reverseSelected = selectedLetters.split('').reverse().join('');

    for (const word of selectedWords) {
        if (!foundWords.has(word) && (selectedLetters === word || reverseSelected === word)) {
            foundWords.add(word);
            markWordFound(word);
            if (foundWords.size === selectedWords.length) {
                showCongrats();
            }
            return;
        }
    }
}

function markWordFound(word) {
    const wordElem = wordList.querySelector(`[data-word="${word}"]`);
    if (wordElem) {
        wordElem.classList.add('found');
    }
    // Also mark cells as found
    const pos = wordPositions[word];
    if (pos) {
        let r = pos.start[0];
        let c = pos.start[1];
        for (let k = 0; k < pos.length; k++) {
            const cell = gridElement.querySelector(`[data-row="${r}"][data-col="${c}"]`);
            cell.classList.add('found');
            r += pos.dir[0];
            c += pos.dir[1];
        }
    }
}

function showCongrats() {
    puzzleScreen.classList.add('hidden');
    congratsScreen.classList.remove('hidden');
}
