
export const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'))
            }, 500)
        } else {
            setTimeout(() => {
                resolve({
                    ame: 'John',
                    age: 17,
                    userId: `user id ${userId}`,
                    email: `userid${userId}@example.com`
                })
            }, 1000)
        }
    })
    return request;
}


requestUserData('777')
    .then(data => console.log('User Data:', data))
    .catch(error => console.log('Error:', error.message))
    .finally(() => console.log('finally'))

requestUserData('broken')
    .then(data => console.log('User Data:', data))
    .catch(error => console.log('Error:', error.message));