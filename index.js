class Game {
    constructor() {
        this.startButton = document.querySelector('#start');
        this.gameField = document.querySelector('#game');

        this.startButton.addEventListener('click', () => {
            this.startButton.classList.add('hide');
            this.gameField.style.background = '#fff';
        });

    }


}

const game = new Game();

