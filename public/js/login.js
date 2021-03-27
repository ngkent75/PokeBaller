// LOGIN function
const loginHandler = async (event) => {
    event.preventDefault();

    // Get values from login form
    const email = document.querySelector('#email-login').nodeValue.trim();
    const password = document.querySelector('#password-login').nodeValue.trim();

    if (email && password) {
        const response = await fetch('/api/pokeUserRoutes/login', { //might need to change route
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/collection');
        } else {
            alert(response.statusText);
        }
    }
};


// SIGNUP Function
const signupHandler = async (event) => {
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
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.signup-form').addEventListener('submit', signupHandler);