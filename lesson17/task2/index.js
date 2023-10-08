export const callbackPromt = {
    message: 'Tell me your number',
    showPromt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPromt(ms) {
        setTimeout(() => this.showPromt(), ms)
    }
};

callbackPromt.showDeferredPromt(2000);

