export function parseUser(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error parsing JSON:', error.message);
        return null;
    }
}

const jsonString = '{"name": "John", "age": 2}';

console.log(parseUser(jsonString));