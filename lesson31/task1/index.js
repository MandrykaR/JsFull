
export const requestUserData = userId => {
    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 'broken') {
                reject(new Error('User not found'))
            } else {
                const userData = {
                    name: 'John',
                    age: 17,
                    userId: `user id ${userId}`,
                    email: `userid${userId}@example.com`
                };
                resolve(userData);
            }
        }, 1000)
    });
    return promis;
};


requestUserData('777')
    .then((data) => console.log('User Data:', data))
    .catch((error) => console.log('Error:', error.message))


requestUserData('broken')
    .then((data) => console.log('User Data:', data))
    .catch((error) => console.log('Error:', error.message))
