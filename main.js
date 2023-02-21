let add=document.getElementById('add');
let toDoContainer=document.getElementById('toDoContainer');
let input=document.getElementById('input');

add.addEventListener('click',function(){
    var para=document.createElement('p');
    para.classList.add('para-styling');
    para.innerHTML=input.value;
    toDoContainer.appendChild(para);
    input.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through"
    })
    para.addEventListener('dblclick',function(){
        toDoContainer.removeChild(para);
    })
})