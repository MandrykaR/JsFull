
export const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'))
            }, 500)
        } else {
            setTimeout(() => {
                resolve({
                    name: 'John',
                    age: 17,
                    userId: `userid ${userId}`,
                    email: `userid${userId}@example.com`
                })
            }, 1000)
        }
    })
    return request;
}


// requestUserData('777')
//     .then(data => console.log('User Data:', data))
//     .catch(error => console.log('Error:', error.message))
//     .finally(() => console.log('finally'))

// requestUserData('broken')
//     .then(data => console.log('User Data:', data))
//     .catch(error => console.log('Error:', error.message));

requestUserData('777')
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'))