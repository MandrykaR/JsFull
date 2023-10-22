export class Order {
    constructor(price, city, type) {
        this.id = Math.random().toString();
        this.price = price;
        this.city = city;
        this.type = type;
        this.isConfirmed = false;
        this.dateCreated = new Date();
        this.dateConfirmed = null;
    }

    checkPrice() {
        return this.price > 1000;
    }

    confirmOrder() {
        if (!this.isConfirmed) {
            this.isConfirmed = true;
            this.dateConfirmed = new Date();
        }
    }

    isValidType() {
        return this.type === 'Buy' || this.type === 'Sell';
    }
}

const order1 = new Order(1130, 'Sumy', 'Buy');
console.log(order1);
order1.confirmOrder();
console.log(order1.id)