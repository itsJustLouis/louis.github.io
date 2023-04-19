const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveHover)

const question = document.querySelector('.question');

const yesBtn = document.querySelector('button.button--yes');
yesBtn.addEventListener('click', () =>{
    question.innerHTML = 'You the best :)';
});

function moveHover(){
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;

    b.style.left=i+"px"
    b.style.top=j+"px"
}