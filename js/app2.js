//Modal3
const modal11 = document.getElementById('4email-modal');
const openBtn11 = document.querySelector('.btn-services2');
const closeBtn3 = document.querySelector('.close-btn3');

//Click events
openBtn11.addEventListener('click',() => {
    modal11.style.display = 'block';
});
closeBtn3.addEventListener('click',() => {
    modal11.style.display = 'none';
});

window.addEventListener('click',(e) => {
    if(e.target === modal11){
        modal11.style.display = 'none';
    }
})