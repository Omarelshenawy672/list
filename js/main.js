let button =document.getElementById('btn');
let ul =document.querySelector('ul');
button.addEventListener('click',()=>{
    if(ul.classList.contains('display')){
        ul.classList.remove("display");
    }else{
         ul.classList.add("display");}
   



})