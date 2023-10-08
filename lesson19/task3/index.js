export function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
}

User.prototype.setAge = function (newArge) {
    this.age = newArge;
    if (newArge < 0) {
        return false;
    }

    if (newArge >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
    }

    return newArge;
}

const user1 = new User('Stas', -1);

console.log(user1.setAge(-1));