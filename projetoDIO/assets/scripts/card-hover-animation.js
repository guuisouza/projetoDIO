function handdleMouseEnter(){
    this.classList.add('s-card--hovered') //adiciona uma nova classe ao elemento pego
    document.body.id = `${this.id}-hovered` //pega o body e atribui um id pra ele/id do elemento que ta passando o mouse encima
}

function handdleMouseLeave(){
    this.classList.remove('s-card--hovered'); // remove a classe do elemento quando o mouse não está encima
    document.body.id = ''; //limpe o id dele
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');

    for (let index = 0; index < cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener('mouseenter', handdleMouseEnter) //adiciona o evento que adiciona a classe
        card.addEventListener('mouseleave', handdleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)
