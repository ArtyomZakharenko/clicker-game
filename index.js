class Game {
    constructor() {
        this.counter = 0;
        this.isGameStarted = false;
        this.startButton = document.querySelector('#start');
        this.gameField = document.querySelector('#game');
        this.time = document.querySelector('#time');
        this.timerHeader = document.querySelector('#time-header');
        this.resultHeader = document.querySelector('#result-header');
        this.result = document.querySelector('#result');

        this.startButton.addEventListener('click', () => this.runGame());
        this.gameField.addEventListener('click', (event) =>{
            if (!this.isGameStarted){
                return;
            }
            if (event.target.className === 'box'){
                this.renderBox();
                this.counter++;
            } 
        });
    }

    setGameDuration (){
        this.time.textContent = 5;
    }

    runGame(){
        this.counter = 0;
        this.setGameDuration();
        this.timerHeader.classList.remove('hide');
        this.resultHeader.classList.add('hide');
        this.isGameStarted = true;
        this.startButton.classList.add('hide');
        this.gameField.style.background = '#fff';
        const interval = setInterval(() =>{
            let time = parseFloat(this.time.textContent);
            console.log();
            
        if (time > 0) {
            this.time.textContent = (time - 0.1).toFixed(1);
        } else {
            clearInterval(interval);
            this.endGame();
        }

        }, 100);

        this.renderBox();
    }

    renderBox(){
        this.gameField.innerHTML = '';
        const box = document.createElement('div');
        const boxSize = this.getRandom(30, 100);
        const gameSize = this.gameField.getBoundingClientRect();
        const maxTop = gameSize.height - boxSize;
        const maxLeft = gameSize.width - boxSize;
        
        box.className = 'box';
        box.style.height = box.style.width = boxSize + 'px';
        box.style.background = '#000';
        box.style.top = this.getRandom(0, maxTop) + 'px';
        box.style.left = this.getRandom(0, maxLeft) + 'px';

        this.gameField.appendChild(box);
    }

    getRandom(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    endGame(){
        this.isGameStarted = false;
        this.startButton.classList.remove('hide');
        this.gameField.style.background = '#ccc';
        this.gameField.innerHTML = '';
        this.timerHeader.classList.add('hide');
        this.resultHeader.classList.remove('hide');
        this.result.textContent = this.counter + ' clicks';
    }
}

const game = new Game();

