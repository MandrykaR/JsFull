class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createEmpty() {
        return new User("", null);
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(newAge) {
        this.age = newAge;
        if (newAge < 0) {
            return false;
        }
        if (newAge >= 25) {
            this.requestNewPhoto();
        }

        return newAge;
    }
}

const user1 = new User('John', 3);
user1.setAge(5);