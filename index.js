class Game {
    constructor() {

        this.startButton = document.querySelector('#start');
        this.gameField = document.querySelector('#game');

        this.startButton.addEventListener('click', () => this.runGame());
        this.gameField.addEventListener('click', (event) =>{
            if (event.target.className === 'box') {
                this.renderBox();
                console.log('click on box');
            }
        });
    }

    runGame(){
        this.startButton.classList.add('hide');
        this.gameField.style.background = '#fff';
        this.renderBox();
        return this;
    }

    renderBox(){
        this.gameField.innerHTML = '';
        const box = document.createElement('div');
        box.className = 'box';
        box.style.height = box.style.width = '50px';
        box.style.background = '#000';
        box.style.top = '50px';
        box.style.left = '70px';

        this.gameField.appendChild(box);
    }
}

const game = new Game();

