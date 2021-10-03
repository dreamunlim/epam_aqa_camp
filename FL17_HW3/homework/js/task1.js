class DepositProfit {
    constructor() {
        this.initialMoneyAmount = 0;
        this.minimumAmount = 1000;
        this.numberOfYears = 1;
        this.minimumYears = 1;
        this.percentage = 0.1;
        this.minPercentage = 0.1;
        this.maxPercentage = 100;
        this.earnedPerOneYear = 0;
        this.totalEarnedPerAllYears = 0;
        this.totalProfitAndAmount = 0;
    }

    startProgram() {
        try {
            this.inputInitialMoneyAmount();
            this.inputNumberOfYears();
            this.inputPercentage();
            this.calcTotalProfitAndAmount();
        } catch (error) {
            this.showInvalidInputMessage(error);
            new DepositProfit().startProgram();
        }
    }

    inputInitialMoneyAmount() {
        this.initialMoneyAmount = Number(prompt('Input initial money amount: '));
        this.totalProfitAndAmount = this.initialMoneyAmount;

        if (Number.isNaN(this.initialMoneyAmount)) {
            throw 'initialMoneyAmount is NaN';
        } else if (this.initialMoneyAmount < this.minimumAmount) {
            throw 'initialMoneyAmount < ' + this.minimumAmount;
        }
    }

    inputNumberOfYears() {
        this.numberOfYears = Number(prompt('Input number of years: '));

        if (Number.isNaN(this.numberOfYears)) {
            throw 'numberOfYears is NaN';
        } else if (this.numberOfYears < this.minimumYears) {
            throw 'numberOfYears < ' + this.minimumYears;
        }
    }

    inputPercentage() {
        this.percentage = Number(prompt('Input percentage: '));

        if (Number.isNaN(this.percentage)) {
            throw 'percentage is NaN';
        } else if (this.percentage < this.minPercentage || this.percentage > this.maxPercentage) {
            throw 'Allowed percentage: ' + this.minPercentage + ' - ' + this.maxPercentage;
        }
    }

    showInvalidInputMessage(message) {
        alert('Invalid input data: \n' + message);
    }

    calcTotalProfitAndAmount() {
        for (let i = 0; i < this.numberOfYears; ++i) {
            this.earnedPerOneYear = this.totalProfitAndAmount * (this.percentage / 100);
            this.totalEarnedPerAllYears += this.earnedPerOneYear;
            this.totalProfitAndAmount = this.initialMoneyAmount + this.totalEarnedPerAllYears;
        }

        this.showTotalProfitAndAmount();
    }

    showTotalProfitAndAmount() {
        alert('Initial amount: ' + this.initialMoneyAmount +
        '\nNumber of years: ' + this.numberOfYears +
        '\nPercentage of year: ' + this.percentage +
        '\n\nTotal profit: ' + this.totalEarnedPerAllYears.toFixed(2) +
        '\nTotal amount: ' + this.totalProfitAndAmount.toFixed(2));
    }
}

new DepositProfit().startProgram();