// const productButton = document.querySelector(".productBtn");
// const payment = document.querySelector(".payment");
// const close = document.querySelector(".close");

// productButton.addEventListener("click", () => {
//   payment.style.display = "flex";
// });

// close.addEventListener("click", () => {
//   payment.style.display = "none";
// });

const btn = document.querySelector(".btn");
const card = document.querySelector(".card");
const successCard= document.querySelector(".success-card");
/*
btn.addEventListener('click', ()=>{
    card.style.display="none";
    successCard.style.display="block";
});

btn.addEventListener('click', ()=>{
    card.style.display="none";
    successCard.style.display="block";
});
*/

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('errorMessage');
    
    console.log('Email validity:', emailInput.checkValidity());
    if (!emailInput.checkValidity()) {
        emailInput.classList.add('invalid');
        errorMessage.style.display = 'block';
    } else {
        console.log('Email is valid');
        emailInput.classList.remove('invalid');
        errorMessage.style.display = 'none';
        btn.addEventListener('click', ()=>{
            card.style.display="none";
            successCard.style.display="block";
        });
        
        btn.addEventListener('click', ()=>{
            card.style.display="none";
            successCard.style.display="block";
        });
        // Form can be submitted
         //this.submit();
    }
});


