const linksMenu = document.querySelectorAll('.menu-li')
const menuPrincipais = document.querySelector('.menu-li.principais')
const menuHashiras = document.querySelector('.menu-li.hashiras')
const menuViloes = document.querySelector('.menu-li.viloes')

const sections = document.querySelectorAll('.section')
const sectionPrincipais = document.querySelector('.personagens-principais')
const sectionHashiras = document.querySelector('.personagens-hashiras')
const sectionViloes = document.querySelector('.personagens-viloes')

linksMenu.forEach((section, i) => {
    section.addEventListener('click', () => {
        sections.forEach(sec => {
            sec.classList.add('d-none')
        })

        linksMenu.forEach(li => {
            li.classList.remove('open')
        })

        switch (i) {
            case 0:
                sectionPrincipais.classList.remove('d-none')
                menuPrincipais.classList.add('open')
                break;

            case 1:
                sectionHashiras.classList.remove('d-none')
                menuHashiras.classList.add('open')
                break;

            case 2:
                sectionViloes.classList.remove('d-none')
                menuViloes.classList.add('open')
                break;
            default:
                break;
        }
    })
})

const btnPrincipais = document.querySelectorAll('.btn-principais');
const personagensPrincipais = document.querySelectorAll('.personagem-principais');

btnPrincipais.forEach((btn, i) => {
    btn.addEventListener('click', () => {

        const btnSelecionado = document.querySelector('.btn-principais.selecionado');
        btnSelecionado.classList.remove('selecionado'); 
        
        const perSelecionado = document.querySelector('.personagem-principais.selecionado');
        perSelecionado.classList.remove('selecionado')

        btn.classList.add('selecionado');
        personagensPrincipais[i].classList.add('selecionado');

    })
})  

const btnHashiras = document.querySelectorAll('.btn-hashiras');
const personagensHashiras = document.querySelectorAll('.personagem-hashiras');

btnHashiras.forEach((btn, i) => {
    btn.addEventListener('click', () => {

        const btnSelecionado = document.querySelector('.btn-hashiras.selecionado');
        btnSelecionado.classList.remove('selecionado'); 
        
        const perSelecionado = document.querySelector('.personagem-hashiras.selecionado');
        perSelecionado.classList.remove('selecionado')

        btn.classList.add('selecionado');
        personagensHashiras[i].classList.add('selecionado');

    })
})   

const btnViloes = document.querySelectorAll('.btn-viloes');
const personagensViloes = document.querySelectorAll('.personagem-viloes');

btnViloes.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const btnSelecionado = document.querySelector('.btn-viloes.selecionado');
        btnSelecionado.classList.remove('selecionado'); 
        
        const perSelecionado = document.querySelector('.personagem-viloes.selecionado');
        perSelecionado.classList.remove('selecionado')

        btn.classList.add('selecionado');
        personagensViloes[i].classList.add('selecionado');
    })
})