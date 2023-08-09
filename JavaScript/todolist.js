let addToDoButton = document.getElementById('addItem');
let toDoContainer = document.getElementById('toDoContainer');
let inputfield = document.getElementById('inputfield');
let currentItems = 0;
let maxItems = 20;

addToDoButton.addEventListener('click', function(){
    if(currentItems === maxItems){
        inputfield.value = 'To many items';
    }
    else{
        currentItems += 1;
        let paragraph = document.createElement('p');
        toDoContainer.appendChild(paragraph);
        paragraph.textContent = inputfield.value;
        inputfield.value = '';
        paragraph.addEventListener('click',function(){
            
        })
        paragraph.addEventListener('dblclick',function(){
            toDoContainer.removeChild(paragraph);
            currentItems - 1;
        })
    }
})