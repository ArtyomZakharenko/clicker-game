class Game {
    constructor() {
        this.counter = 0;
        this.isGameStarted = false;
        this.startButton = document.querySelector('#start');
        this.gameField = document.querySelector('#game');
        this.time = document.querySelector('#time');
        this.greetingHeader = document.querySelector('#greeting-header');
        this.timerHeader = document.querySelector('#time-header');
        this.resultHeader = document.querySelector('#result-header');
        this.result = document.querySelector('#result');
        this.input = document.querySelector('#game-time');

        this.startButton.addEventListener('click', () => this.runGame());
        this.input.addEventListener('input', () => this.setGameDuration());
        this.gameField.addEventListener('click', (event) => {
            if (!this.isGameStarted) {
                return;
            }
            if (event.target.className === 'circle') {
                this.renderCircle();
                this.counter++;
            }
        });
    }

    setGameDuration() {
        let time = +this.input.value;
        this.time.textContent = time.toFixed(1);
    }

    runGame() {
        this.greetingHeader.className = 'hide';
        this.counter = 0;
        this.setGameDuration();
        this.input.setAttribute('disabled', 'true');
        this.timerHeader.classList.remove('hide');
        this.resultHeader.classList.add('hide');
        this.isGameStarted = true;
        this.startButton.classList.add('hide');
        this.gameField.style.background = '#fff';
        const interval = setInterval(() => {
            let time = parseFloat(this.time.textContent);
            console.log();

            if (time > 0) {
                this.time.textContent = (time - 0.1).toFixed(1);
            } else {
                clearInterval(interval);
                this.endGame();
            }

        }, 100);

        this.renderCircle();
    }

    renderCircle() {
        this.gameField.innerHTML = '';
        const circle = document.createElement('div');
        const circleSize = this.getRandom(30, 100);
        const gameSize = this.gameField.getBoundingClientRect();
        const maxTop = gameSize.height - circleSize;
        const maxLeft = gameSize.width - circleSize;

        circle.className = 'circle';
        circle.style.height = circle.style.width = circleSize + 'px';
        circle.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
        circle.style.top = this.getRandom(0, maxTop) + 'px';
        circle.style.left = this.getRandom(0, maxLeft) + 'px';

        this.gameField.appendChild(circle);
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    endGame() {
        this.isGameStarted = false;
        this.startButton.classList.remove('hide');
        this.gameField.style.background = '#ccc';
        this.gameField.innerHTML = '';
        this.timerHeader.classList.add('hide');
        this.resultHeader.classList.remove('hide');
        this.result.textContent = this.counter + ' clicks';
        this.input.removeAttribute('disabled');
    }
}

const game = new Game();

