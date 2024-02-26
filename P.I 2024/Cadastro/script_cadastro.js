const users = []

function salvarDados() {
    const email = document.getElementById("email_input").value;
    const senha = document.getElementById("senha_input").value;
    const nickname = document.getElementById("nickname_input").value;

    console.log(("dadosSalvos").innerText =`Email: ${email}, Senha: ${senha}, Nickname: ${nickname};`)
   
    users.push({ 
        useremail:email,
        usersenha:senha,
        usernickname:nickname
    })

    document.getElementById("email_input").value = ''
    document.getElementById("senha_input").value = ''
    document.getElementById("nickname_input").value = ''
}


