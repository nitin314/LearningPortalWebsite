// animation of logo
let ele = document.querySelector('.logo');
function blink(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            ele.classList.toggle('animate');
            res();
        },1000)
    })
}

async function animateLogo(){
    for(let i = 0; i< 10;i++){
        await blink();
    }
}

animateLogo();
            
// signup form

let signUp = document.querySelector('.signup');
let signupForm = document.querySelector('.form-section');
let allInputs = document.querySelectorAll('input');

signUp.addEventListener('click',()=>{
    signupForm.classList.remove('hidden');
    setTimeout(()=>{
        signupForm.classList.add('opacity1');
    });
})
// hide signup and clear its input values
function hideSignupForm(){
    
    signupForm.classList.remove('opacity1');
    setTimeout(()=>{
        signupForm.classList.add('hidden');
    },500);
    allInputs.forEach((x)=>{
        x.value = '';
    });
}

signupFormClose = document.querySelector('.form-close');
signupFormClose.addEventListener('click',hideSignupForm);

submitSignupForm = document.querySelector('.form-button');
submitSignupForm.addEventListener('click',hideSignupForm);
