const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');



menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//Modal
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.nav-links-btn');
const openBtn1 = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//Click events
openBtn.addEventListener('click',() => {
    modal.style.display = 'block';
});
openBtn1.addEventListener('click',() => {
    modal.style.display = 'block';
});
closeBtn.addEventListener('click',() => {
    modal.style.display = 'none';
});

window.addEventListener('click',(e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});


//Modal
const modal1 = document.getElementById('email-modal1');
const openBtn4 = document.querySelector('.nav-links-btn2');
const openBtn5 = document.querySelector('.modal-input-login');
const closeBtn1 = document.querySelector('.close-btn1');

//Click events
openBtn4.addEventListener('click',() => {
    modal1.style.display = 'block';
});
openBtn5.addEventListener('click',() => {
    modal1.style.display = 'block';
});
closeBtn1.addEventListener('click',() => {
    modal1.style.display = 'none';
});

window.addEventListener('click',(e) => {
    if(e.target === modal1){
        modal1.style.display = 'none';
    }
});

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


//form validation//
const form = document.querySelector('form');
const name = document.querySelector('name');
const email = document.querySelector('email');
const tel = document.querySelector('tel');
const password = document.querySelector('password');
const passwordConfirm = document.querySelector('password-confirm');

//show error message//
function showError(input, message){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//show valid message//
function showValid(input){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function (input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    })
}

//check input length//
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be at less ${max} characters`)
    } else {
        showValid(input);
    }
}

//check password//
function passwordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Пароли не совпадают')
    }
}

//get fieldname//
function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//event Listener//
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name,email,tel,password,passwordConfirm]);
    checkLength(name, 3,30);
    checkLength(password, 8,25);
    checkLength(passwordConfirm,8,25);
    passwordMatch(password,passwordConfirm);
})