link  = document.querySelector('a');
addEventListener('click', () => {
	let content = prompt('Введите текст');	
    link.textContent = content;
    link.preventDefault();
})