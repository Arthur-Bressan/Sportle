function testdb() {
    const enteredEmail = document.getElementById("email_input").value;
    const enteredPassword = document.getElementById("senha_input").value;
    const enteredNickname = document.getElementById("nickname_input").value;

    for (const user of users) {
        if (user.useremail === enteredEmail && user.usersenha === enteredPassword) {
            return;
        }
    }
}

