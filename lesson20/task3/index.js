export class Wallet {
    constructor() {
        this.ballance = 0;
    }

    getBalance() {
        return this.ballance;
    }

    deposit(amount) {
        this.ballance += amount;
    }

    withdraw(amount) {
        if (amount > this.ballance) {
            console.log('No enough funds');
            return;
        }
        this.ballance -= amount;
    }
}

const wallet1 = new Wallet('Stas', 10);

wallet1.withdraw(60);