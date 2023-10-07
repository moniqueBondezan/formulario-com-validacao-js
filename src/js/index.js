// Lógica do Script:

// Criar uma classe pra todos os inputs; 
// A partir disso, criar um único array para eles;
// Percorrrer esse array todo verificando qual está preenchido e qual não está;
// - Quando preenchido, adicionar classe com borda verde;
// - Quando não preenchido, adicionar classe com borda vermelha + texto: 'campo obrigatório *';

const inputList = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.botao-enviar')


function validateInput(input) {
    if (input.value) {
        input.classList.add('campo-valido')
        input.nextElementSibling.classList.remove('mostrar-aviso')
    } else {
        input.classList.remove('campo-valido')
        input.classList.add('campo-invalido')
        input.nextElementSibling.classList.add('mostrar-aviso')
    }
}

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    inputList.forEach((input) => validateInput(input))
})