const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  
  const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
  }

  //Trazendo arquivos do html para dentro do js

 const form = document.querySelector('form')
 const input = document.querySelector('input[name="name"]')
 const thx = document.querySelector('.thx')

 let isValidForm = false

//Abaixo estamos criando uma funcao para caso o campoo de nome não for preenchido aconteça um erro aparencendo a borda vermelha e a mensagem

 const validateInput = () => {

    isValidForm = true
    
    if (!input.value){
        input.classList.add('invalid')
        input.nextElementSibling.classList.remove('error-hidden')
        isValidForm = false
    } 
        
 }

 //Aqui estamos add eventos ao formulário

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInput()
    
    if (isValidForm) {
        form.remove()
        thx.classList.remove('error-hidden')
    
    }
   
    
})

input.addEventListener('input', () => {
    input.classList.remove('invalid')
    input.nextElementSibling.classList.add('error-hidden')
})