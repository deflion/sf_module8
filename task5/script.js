const duplicateField = document.querySelector('#duplicateField');
const input = document.querySelector('input[type=text]')
const button = document.querySelector('button[type=submit');

input.addEventListener('keypress', function(){
    duplicateField.textContent = input.value;
})

button.addEventListener('click', function(event) {
    console.log(input.value);
    input.value = "";
    duplicateField.textContent = "";
    event.preventDefault();
});