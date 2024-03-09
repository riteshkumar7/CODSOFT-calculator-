let inputbox = document.getElementById('boxInput');
let number = document.querySelectorAll('button');

let string ="";
let array = Array.from(number);
array.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputbox.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            inputbox.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            inputbox.value = string;
        }
    })
})