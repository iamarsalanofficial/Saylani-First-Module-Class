function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const makepassword = 8;
    let password = "";

    for (let i = 0; i < makepassword; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

const newPassword = generatePassword();
console.log("Generated Password:", newPassword);
