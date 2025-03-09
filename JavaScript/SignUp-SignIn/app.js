// script.js
function signUp() {
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;
    
    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        localStorage.setItem(username, password);
        alert('Signup successful! You can now log in.');
        swapForm('signin');
    }
}

function signIn() {
    let username = document.getElementById('signin-username').value;
    let password = document.getElementById('signin-password').value;
    
    let storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
}

function swapForm(form) {
    if (form === 'signup') {
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('signin-form').style.display = 'none';
    } else {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('signin-form').style.display = 'block';
    }
}
