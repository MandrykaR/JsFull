export class Order {
    constructor(price, city, type) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = Math.floor(Math.random() * 1000);
        this.confirmed = true;
        this.confirmationDate = new Date();
    }

    checkPrice() {
        return this.price > 1000;
    }

    confirmOrder() {
        if (!this.confirmed && this.isValidType()) {
            this.confirmed = false;
            this.confirmationDate;
        }
    }

    isValidType() {
        return this.type === "Buy" || this.type === "Sell";
    }
}

const order1 = new Order(1130, "Sumy", "Buy");
console.log(order1);
console.log(order1.id);
console.log(order1.confirmationDate);