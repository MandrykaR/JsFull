export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get sessionId() {
        return this._sessionId;
    }
}



class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return this._users.map(user => user.name)
    }

    getUserIds() {
        return this._users.map(user => user.id)
    }

    getUserNameById(id) {
        const user = this._users.find(user => user.id === id);
        return user ? user.name : null;
    }
}

const users = [
    new User(1, 'Andrey', 'session2'),
    new User(2, 'Stas', 'session4'),
    new User(3, 'Nikita', 'session1'),
];

const user1 = new UserRepository(users);

console.log(user1.getUserIds());