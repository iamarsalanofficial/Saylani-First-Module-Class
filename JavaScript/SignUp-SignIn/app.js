function signUp() {
    let username = document.getElementById('signup-username').value.trim();
    let email = document.getElementById('signup-email').value.trim();
    let phone = document.getElementById('signup-phone').value.trim();
    let password = document.getElementById('signup-password').value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let terms = document.getElementById('signup-terms').checked;

    if (!username || !email || !phone || !password) {
        alert('All fields are required.');
        return;
    }
    if (!gender) {
        alert('Please select a gender.');
        return;
    }
    if (!terms) {
        alert('You must accept the terms and conditions.');
        return;
    }

    let userData = {
        username,
        email,
        phone,
        password,
        gender: gender.value
    };

    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        localStorage.setItem(username, JSON.stringify(userData));
        alert('Signup successful! You can now log in.');
        swapForm('signin');
    }
}

function signIn() {
    let username = document.getElementById('signin-username').value.trim();
    let password = document.getElementById('signin-password').value.trim();

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    let storedUser = localStorage.getItem(username);
    if (storedUser) {
        let userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert('Login successful!');
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('User does not exist. Please sign up.');
    }
}

function swapForm(form) {
    document.getElementById('signup-form').style.display = form === 'signup' ? 'block' : 'none';
    document.getElementById('signin-form').style.display = form === 'signin' ? 'block' : 'none';
}
