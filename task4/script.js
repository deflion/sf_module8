const link = document.querySelector("#link");

link.addEventListener('click', function(event){ 

    this.textContent = prompt('Новое название ссылки: ');
    event.preventDefault();
    
})