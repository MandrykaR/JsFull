export const finishFrom = () => {
    const loginForm = document.querySelector('.login-form');

    const loginInput = document.createElement('input');
    loginInput.setAttribute('type', 'text');
    loginInput.setAttribute('name', 'login');

    const passwordInput = loginForm.querySelector('input[name="password"]');
    passwordInput.setAttribute('type', 'password')

    loginForm.prepend(loginInput);
}


