// LOGIN function
const loginHandler = async (event) => {
    event.preventDefault();

    // Get values from login form
    const email = document.querySelector('#email-login').nodeValue.trim();
    const password = document.querySelector('#password-login').nodeValue.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', { //might need to change route
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            console.log(response.statusText); //TODO
        }
    }
};

// SIGNUP Function
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Get values from signup form
    const name = document.querySelector('#name-signup').nodeValue.trim();
    const email = document.querySelector('#email-login').nodeValue.trim();
    const password = document.querySelector('#password-login').nodeValue.trim();

    if (name && email && password) {
        const response = await fetch('/api/pokeUserRoutes', { //might need to change route
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/collection');
        } else {
            console.log(response.statusText); //TODO
        }
    }
};

document.querySelector('.login-form').addEventListener('LOGIN', loginHandler);
document.querySelector('.signup-form').addEventListener('SIGNUP', signupFormHandler);