window.addEventListener('error', function onUnhandledError(err) {
    console.error('error', err.message);
});

let userParsingResult;

try {
    const validUserJSON = '{"id": 1, "name": "John Doe", "age": 30}';
    const user = JSON.parse(validUserJSON);
    console.log('User data: ', user);
    userParsingResult = 'success';
} catch (e) {
    userParsingResult = 'error';
} finally {
    console.log(`User parsing finished with ${userParsingResult}`);
    if (userParsingResult === 'success') {
        console.log('User parsing succeeded');
    }
}

let productParsingResult;

try {
    const brokenProductJSON = '{"id": 2, "name": "Product 1", "price": 20,}';
    const product = JSON.parse(brokenProductJSON);
    console.log('Product data: ', product);
    productParsingResult = 'success';
} catch (e) {
    productParsingResult = 'error';
} finally {
    console.log(`Product parsing finished with ${productParsingResult}`);
}
