function userCard(number) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number,

        getCardOptions: function () {
            return {
                balance: this.balance,
                transactionLimit: this.transactionLimit,
                historyLogs: this.historyLogs,
                key: number
            };
        },

        putCredits: function (amountOfCredit) {
            this.balance = this.balance + amountOfCredit;
            this.historyLogs.push({
                operationType: 'Received credit',
                credits: amountOfCredit,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },

        takeCredits: function (amountOfCredit) {
            if (this.transactionLimit > amountOfCredit && this.balance > amountOfCredit) {
                this.balance = this.balance - amountOfCredit;
                this.historyLogs.push({
                    operationType: 'Withdrawal of credit',
                    credits: amountOfCredit,
                    operationTime: new Date().toLocaleString('en-GB')
                });
            } else {
                console.error('Amount of credit are greater then your balance or transaction limit');
            }
        },

        setTransactionLimit: function (amountOfLimit) {
            this.transactionLimit = amountOfLimit;
            this.historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amountOfLimit,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },

        transferCredits: function (amountOfCredit, card) {
            if (this.transactionLimit > amountOfCredit && this.balance > amountOfCredit) {
                const tax = 0.005, amountOfTax = amountOfCredit * tax;
                this.balance = this.balance - amountOfCredit - amountOfTax;
                card.balance = card.balance + amountOfCredit;
            } else {
                console.error('Amount of transfer are greater then your balance or transaction limit');
            }
        }
    };
    return card;
}


class UserAccount {
    constructor(holdersName) {
        this.holdersName = holdersName;
        this.cards = [];
    }

    addCard() {
        const arrLenght = 3;
        if (this.cards.length <= arrLenght) {
            this.cards.push(userCard());
        } else {
            console.error('Sorry, but for one person allow only three cards');
        }
    }

    getCardbyKey(key) {
        console.log(userCard(key));
    }
}