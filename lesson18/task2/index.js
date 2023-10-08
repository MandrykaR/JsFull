export const wallet = {
    transactions: [1, 34, 5, 634],
    getMax() {
        return Math.max(...this.transactions)
    }, 
    getMin() {
        return Math.min(...this.transactions)
    }
}

console.log(wallet.getMax());
console.log(wallet.getMin());