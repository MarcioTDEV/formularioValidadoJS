

vFormulario = {
    formulario: document.getElementById("formulario"),
    
    inputNome: document.getElementById("nome"),
    inputEmail: document.getElementById("email"),
    inputData: document.getElementById("dataDeNascimento"),
    inputCPF: document.getElementById("cpf"),
    inputSenha: document.getElementById("senha"),

    mensagemNome: document.getElementById("mensagemNome"),
    mensagemEmail: document.getElementById("mensagemEmail"),
    mensagemData: document.getElementById("mensagemNascimento"),
    mensagemCPF: document.getElementById("mensagemCPF"),
    mensagemSenha: document.getElementById("mensagemSenha"),

    validarInputNome: ()=>{
        if(vFormulario.inputNome.validity.valid == false){
            vFormulario.mensagemNome.innerHTML = "O campo não pode ficar vazio!"
        }else{
            vFormulario.mensagemNome.innerHTML = ""; 
            }
    },

    validarInputEmail: ()=>{
        if(vFormulario.inputEmail.value == ""){
            vFormulario.mensagemEmail.innerHTML = "O campo não pode ficar vazio!"
        }else{
            vFormulario.mensagemEmail.innerHTML = ""; 
            }
    },

    validarInputData: ()=>{
        if(vFormulario.inputData.value == ""){
            vFormulario.mensagemData.innerHTML = "O campo não pode ficar vazio!"
        }else{
            vFormulario.mensagemData.innerHTML = ""; 
            }
    },

    validarInputCPF: ()=>{
        if(vFormulario.inputCPF.value == ""){
            vFormulario.mensagemCPF.innerHTML = "Insira um CPF válido"
        }else{
            vFormulario.mensagemCPF.innerHTML = ""; 
            }
    },

    validarInputSenha: ()=>{
        if(vFormulario.inputSenha.value == ""){
            vFormulario.mensagemSenha.innerHTML = "Informe uma senha no formado indicado!"
        }else{
            vFormulario.mensagemSenha.innerHTML = ""; 
            }
    },
}



vFormulario.inputNome.addEventListener("blur", ()=>{
    vFormulario.validarInputNome()
})

vFormulario.inputEmail.addEventListener("blur", ()=>{
    vFormulario.validarInputEmail()
})

vFormulario.inputData.addEventListener("blur", ()=>{
    vFormulario.validarInputData()
})

vFormulario.inputCPF.addEventListener("blur", ()=>{
    vFormulario.validarInputCPF()
})
vFormulario.inputSenha.addEventListener("blur", ()=>{
    vFormulario.validarInputSenha()
})