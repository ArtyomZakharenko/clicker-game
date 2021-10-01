class Game {
    constructor() {

        this.startButton = document.querySelector('#start');
        this.gameField = document.querySelector('#game');

        this.startButton.addEventListener('click', () => this.runGame());
        this.gameField.addEventListener('click', (event) =>{
            if (event.target.className === 'box') this.renderBox();
        });
    }

    runGame(){
        this.startButton.classList.add('hide');
        this.gameField.style.background = '#fff';
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
}

const game = new Game();

