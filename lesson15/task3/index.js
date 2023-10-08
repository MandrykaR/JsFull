export function createLogger() {
    const memory = [];

    function addMessage(type, message) {
        memory.push({
            message: message,
            dateTime: new Date(),
            type: type,
        });
    }

    return {
        warn: function (message) {
            addMessage('warn', message);
        },
        error: function (message) {
            addMessage('error', message);
        },
        log: function (message) {
            addMessage('log', message);
        },
        getRecords: function (type) {
            if (!type) {
                return memory.slice().sort((a, b) => b.dateTime - a.dateTime);
            } else {
                return memory
                    .filter((msg) => msg.type === type)
                    .slice()
                    .sort((a, b) => b.dateTime - a.dateTime);
            }
        },
    };
}