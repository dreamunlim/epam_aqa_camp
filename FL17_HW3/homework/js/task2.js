class CasinoRoulette {
    constructor() {
        this.currentUserAttempt = 0;
        this.maxUserAttempts = 3;
        this.maxPocketNumber = 8;
        this.randomisedPocket = 0;
        this.userSelectedPocket = 0;
        this.attemptPrizes = [100, 50, 25]; // 1st, 2nd, 3rd
        this.totalPrize = 0;
        this.runGame = false;
    }

    showGameStartPrompt() {
        this.runGame = this.getUserConfirmation('Do you want to play a game?');
        if (this.runGame) {
            this.startGame();
        } else {
            this.showOnscreenMessage('You did not become a billionaire, but can.');
        }
    }

    startGame() {
        while (this.runGame && this.currentUserAttempt < this.maxUserAttempts) {
            this.randomisedPocket = Math.floor(Math.random() * this.maxPocketNumber);
            this.askUserForPocket();
            this.checkUserGuess();
            
            ++this.currentUserAttempt;
        }
    }

    askUserForPocket() {
        let gameInfo = 'Allowed pocket number range: ' + 0 + ' - ' + this.maxPocketNumber +
        '\nAttempts left: ' + (this.maxUserAttempts - this.currentUserAttempt) +
        '\nTotal prize: ' + this.totalPrize + '$' +
        '\nPossible prize on current attempt: ' + this.attemptPrizes[this.currentUserAttempt] + '$' +
        '\n\nInput pocket number: ';

        this.userSelectedPocket = Number(prompt(gameInfo, '0'));

        if (Number.isNaN(this.userSelectedPocket)) {
            let message = 'UserSelectedPocket is NaN';
            this.showOnscreenMessage(message);
            this.askUserForPocket();
        } else if (this.userSelectedPocket < 0 || this.userSelectedPocket > this.maxPocketNumber) {
            let message = 'Allowed pocket number range: ' + 0 + ' - ' + this.maxPocketNumber;
            this.showOnscreenMessage(message);
            this.askUserForPocket();
        }
    }

    checkUserGuess() {
        if (this.userSelectedPocket === this.randomisedPocket) {
            let message = 'Congratulation, you won!' +
            '\nYour prize is: ' + this.attemptPrizes[this.currentUserAttempt] + '$' +
            '\nDo you want to continue?';

            this.increaseTotalPrize();
            this.increaseMaxPocketNumber();
            this.doublePrizesValues();
            this.resetUserAttempts();

            let continueGame = this.getUserConfirmation(message);
            if (continueGame) {
                // continue execution flow normally
            } else { // user does not want to continue
                this.askIfUserWantsToPlayAgain();
            }
            
        } else { // user did not guess
            this.askIfUserWantsToPlayAgain();
        }
    }

    askIfUserWantsToPlayAgain() {
        let message = 'Thank you for your participation.' +
            '\nYour prize is: ' + this.totalPrize + '$' +
            '\nDo you want to play again?';

            let playAgain = this.getUserConfirmation(message);
            if (playAgain) {
                if (this.maxUserAttempts - this.currentUserAttempt === 1) {
                    this.runGame = false; // quit game on no attempts left
                }
            } else {
                this.runGame = false;
            }
    }

    resetUserAttempts() {
        this.currentUserAttempt = -1;
    }

    increaseTotalPrize() {
        this.totalPrize += this.attemptPrizes[this.currentUserAttempt];
    }

    increaseMaxPocketNumber() {
        this.maxPocketNumber += 4;
    }

    doublePrizesValues() {
        for (let i = 0; i < this.attemptPrizes.length; ++i) {
            this.attemptPrizes[i] = this.attemptPrizes[i] * 2;
        }
    }

    showOnscreenMessage(message) {
        alert(message);
    }

    getUserConfirmation(message) {
        return confirm(message);
    }
}

new CasinoRoulette().showGameStartPrompt();