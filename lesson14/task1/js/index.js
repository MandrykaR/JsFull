let message = "Just learn it! Your Gromcode";

function setMessage(newMessage) {
    message = newMessage;
}

function sendMessage(name) {
    console.log(`${name}, ${message}`);
}

setMessage('Good job');

sendMessage('Ann');