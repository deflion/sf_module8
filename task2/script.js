const consoleLog = document.querySelector('#consoleLog');
const id_alert = document.querySelector('#alert');
const id_prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в вэб-консоль');

    let child = document.querySelector('code');

    child.textContent = "Пример использования команды console.log";
});

id_alert.addEventListener('click', ()=>{
    alert('Метод для вывода сообщения в окне браузера');
});

id_prompt.addEventListener('click', ()=>{
    alert('Метод для ввода сообщения в диалоговое окно');
});
