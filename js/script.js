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

// Код для панели total bet при нажатии на кнопки плюс и минус
let many_bet = document.querySelector('#panel_bet_many').innerHTML;
let many_coin = document.querySelector('#coin_many').innerHTML;
const plus = document.querySelector('.button_plus');
const minus = document.querySelector('.button_minus');

plus.addEventListener('click', function(e){
	if (parseInt(many_bet) == 300){
		document.querySelector('#panel_bet_many').innerHTML = many_bet;
		document.querySelector('#coin_many').innerHTML = many_coin;
		
	}else{
		many_coin = parseInt(many_coin) + 1;
		many_bet = parseInt(many_bet) + 15;
		if(parseInt(many_bet) == 300){
			plus.classList.remove('button_plus');
			plus.classList.add('button_plus_disable');
			document.querySelector('#panel_bet_many').innerHTML = many_bet;
			document.querySelector('#coin_many').innerHTML = many_coin;
		}
		document.querySelector('#panel_bet_many').innerHTML = many_bet;
		document.querySelector('#coin_many').innerHTML = many_coin;
		minus.classList.remove('button_minus_disable');
		minus.classList.add('button_minus');
	}
	
});

minus.addEventListener('click', function(e){
	if(many_bet == 15){
		document.querySelector('#panel_bet_many').innerHTML = many_bet;
		document.querySelector('#coin_many').innerHTML = many_coin;
		

	}else{
		many_coin = parseInt(many_coin) - 1;
		many_bet = parseInt(many_bet) - 15;
		if(many_bet == 15){
			minus.classList.remove('button_minus');
			minus.classList.add('button_minus_disable');
			document.querySelector('#panel_bet_many').innerHTML = many_bet;
			document.querySelector('#coin_many').innerHTML = many_coin;
		}
		document.querySelector('#panel_bet_many').innerHTML = many_bet;
		document.querySelector('#coin_many').innerHTML = many_coin;
		plus.classList.remove('button_plus_disable');
		plus.classList.add('button_plus');
		
		
	}
	
});

