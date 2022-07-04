const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector("#confirm-password")
const passwordValidator = document.querySelector(".password-validator")


document.querySelector("form").addEventListener("click", ()=>{
    if (passwordInput === document.activeElement || confirmPasswordInput===document.activeElement){
        passwordValidator.classList.add("active")
    }else{passwordValidator.classList.remove("active")}
})


passwordInput.addEventListener('input', e=> {
    const passwordInputValue = passwordInput.value
    const isEight = new RegExp(".{8,}")
    const hasLower= new RegExp(".*[a-z]")
    const hasUpper = new RegExp(".*[A-Z]")
    const hasNumber= new RegExp(".*[0-9]") 
    const hasSpecial = new RegExp (".*[!@#$%^&*]")

   if (passwordInputValue.match(isEight)){
    document.getElementById("eight").classList.add("true");
   }else{document.getElementById("eight").classList.remove("true")}

   if (passwordInputValue.match(hasLower)){
    document.getElementById("lowercase").classList.add("true");
   }else{document.getElementById("lowercase").classList.remove("true")}

   if (passwordInput.value.match(hasUpper)){
    document.getElementById("uppercase").classList.add("true");
   }else{document.getElementById("uppercase").classList.remove("true")}

   if (passwordInput.value.match(hasNumber)){
    document.getElementById("number").classList.add("true");
   }else{document.getElementById("number").classList.remove("true")}

   if (passwordInput.value.match(hasSpecial)){
    document.getElementById("special").classList.add("true");
   }else{document.getElementById("special").classList.remove("true")}

   if ((passwordInput.value.length >= 1) && (passwordInput.value == confirmPasswordInput.value)){
    document.getElementById("matches").classList.add("true");
   }else{document.getElementById("matches").classList.remove("true")}
});

confirmPasswordInput.addEventListener('input', e=>{
    if ((passwordInput.value.length >= 1) && (passwordInput.value == confirmPasswordInput.value)){
        document.getElementById("matches").classList.add("true");
       }else{document.getElementById("matches").classList.remove("true")}
})