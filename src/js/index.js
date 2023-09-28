// Lógica do Script:

// Criar uma classe pra todos os inputs; 
// A partir disso, criar um único array para eles;
// Percorrrer esse array todo verificando qual está preenchido e qual não está;
// - Quando preenchido, adicionar classe com borda verde;
// - Quando não preenchido, adicionar classe com borda vermelha + texto: 'campo obrigatório *';

const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.botao-enviar')

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    camposFormulario.forEach((input) => {
        if (input.value) {
            input.classList.add('campo-preenchido')
            input.nextElementSibling.classList.remove('mostrar-aviso')
        } else {
            input.classList.remove('campo-preenchido')
            input.classList.add('campo-obrigatorio')
            input.nextElementSibling.classList.add('mostrar-aviso')
        }
    })
})