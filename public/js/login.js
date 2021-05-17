function openModalLogin() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("LoginModal").style.display = "block"
    document.getElementById("LoginModal").classList.add("show")
};

function closeModalLogin() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("LoginModal").style.display = "none"
    document.getElementById("LoginModal").classList.remove("show")
};

function openModalSignup() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("SignupModal").style.display = "block"
    document.getElementById("SignupModal").classList.add("show")
};

function closeModalSignup() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("SignupModal").style.display = "none"
    document.getElementById("SignupModal").classList.remove("show")
};


// LOGIN function
const loginHandler = async (event) => {
    event.preventDefault();

    // Get values from login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(email, password);
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            // alert("Sorry, incorrect username or password");
            // document.getElementById("LoginModal").modal("show");
            openModalLogin();
        }
    }
};

// SIGNUP Function
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Get values from signup form
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            // console.log(response.statusText);
            openModalSignup()
        }
    }
};



document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);