// Код подключение звука при нажатии на кнопки
const button_click = document.querySelectorAll('.button');
button_click.forEach.call(button_click, function(elem){
	elem.addEventListener('click', function(){
		let btn_click = document.getElementById('click');
		let old = btn_click.src;
		btn_click.src = "";
		btn_click.src = old;
		document.getElementById('click').play();
	});
});