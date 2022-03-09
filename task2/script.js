const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

document.querySelector('#alert').addEventListener('click', () => {
    alert ('Служит для вывода в браузере диалогового окна с сообщением и кнопкой ОК');
});

document.querySelector('#prompt').addEventListener('click', () => {
    prompt ('Предназначен для вывода диалогового окна с сообщением,текстовым полем для ввода данных и кнопками «ОК» и «Отмена»');
});