export const event = {
    message: 'Welcome to the party',
    guest: [
        {name:'John', age: 18, email: 'example@server.com'},
        {name:'Bob', age: 17, email: 'example@server.com'}
    ],
    getInvitations(){
        return this.guest
            .filter(({age}) => age >= 18)
            .map(({name, email}) => ({
                email,
                text: `Dear ${name}! ${this.message}`
            }))
    }
}

console.log(event.getInvitations());