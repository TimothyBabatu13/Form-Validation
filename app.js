/**
 * i and k are only used for loop control.
 */
function passwordVisibility(){
    let eyeIcon = document.getElementsByClassName("eye-slash");
    let showPassword = document.getElementsByClassName("showPassword");

    for(let i = 0; i < eyeIcon.length; i++){
        eyeIcon[i].addEventListener("click", function(){
            eyeIcon[i].classList.toggle("eye");
            for(let k = 0; k < showPassword.length; k++){
                if(showPassword[k].type == "password"){
                    showPassword[k].type = "text";
                }
                else{
                    showPassword[k].type = "password";
                }
            } 
        });
    }
};

function passwordStrength(){
    let smallLetter = /[a-z]/g;
    let bigLetter = /[A-Z]/g;
    let number = /[0-9]/g;
    let showPassword = document.getElementsByClassName("showPassword");
    let screen = document.getElementsByClassName("screen");
    let checkbox = document.getElementsByClassName("check");
    
    showPassword[0].addEventListener("keyup", function(){
        if(showPassword[0].value.match(smallLetter)){
            screen[0].innerHTML = "At least a small letter is needed";
            checkbox[0].style.display = "block";
            screen[0].style.color = "green";
            screen[0].style.paddingLeft = 10 + "px";
        }
        else{
            screen[0].innerHTML = "At least a small letter is needed";
            checkbox[0].style.display = "none";
            screen[0].style.color = "red";
            screen[0].style.paddingLeft = 0 + "px";

        }
        if(showPassword[0].value.match(bigLetter)){
            screen[1].innerHTML =  "At least a capital letter is needed";
            checkbox[1].style.display = "block";
            screen[1].style.color = "green";
            screen[1].style.paddingLeft = 10 + "px";
        }
        else{
            screen[1].innerHTML = "At least a small letter is needed";
            checkbox[1].style.display = "none";
            screen[1].style.color = "red";
            screen[1].style.paddingLeft = 0 + "px";
        }
        if(showPassword[0].value.length < 8){
            screen[2].innerHTML = "Password cannot be less than eight";
            screen[2].style.color = 'red';
        }
        else{
            screen[2].innerHTML = "";
        }
    });
};

function checkPassword(){
    let showPassword = document.getElementsByClassName("showPassword");
    let screen = document.getElementsByClassName("screen");
    showPassword[1].addEventListener("keyup", function(){
        if(showPassword[0].value !== showPassword[1].value){
            screen[screen.length - 1].innerHTML = "Password does not match";
            screen[screen.length - 1].style.color = "red";
        }
        else{
            screen[screen.length - 1].innerHTML = "";
        }
    });
    
};


function main(){
    passwordVisibility();
    passwordStrength();
    checkPassword();
};
main();
