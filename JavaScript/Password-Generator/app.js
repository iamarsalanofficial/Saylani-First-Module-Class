function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRST123456789abcdefghijklmnopqrstuvwxyz";
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

