const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

export function getUsersList() {
    return fetch(baseUrl).then(function (response) {
        return response.json();
    });
}

export function getUserById(userId) {
    return fetch(`${baseUrl}/${userId}`).then(function (response) {
        return response.json();
    });
}

export function createUser(userData) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData),
    });
}

export function deleteUser(userId) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    });
}

export function updateUser(userId, userData) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData),
    });
}