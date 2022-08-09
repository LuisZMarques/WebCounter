let counter = 0;

var value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(buttons){
    buttons.addEventListener('click', function(btn){
        const selectedBtn = btn.currentTarget.classList;
        console.log(selectedBtn[1]);
        if(selectedBtn[1] === "increase"){
            counter++;
        }else if(selectedBtn[1] === "decrease"){
            counter--;
        }else if(selectedBtn[1] === "reset"){
            counter = 0;
        }else{
            window.alert("This action is not possible")
        }
        value.textContent = counter;
    })
})
