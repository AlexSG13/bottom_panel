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

// Код моделирования вращения при выборе спинов из выпадающего списка
const spins_5 = document.querySelector('#spins_5');
const spins_10 = document.querySelector('#spins_10');
const spins_15 = document.querySelector('#spins_15');
const spins_20 = document.querySelector('#spins_20');
const spins_25 = document.querySelector('#spins_25');
const spins_inf = document.querySelector('#infinity_spins');
const auto_button = document.querySelector('.auto_button');
const auto_content = document.querySelector('.auto_content');
const control_panel = document.querySelector('.control_panel');
const control_spin = document.querySelector('.spin');
const div_counter = document.createElement('div');
const div_counter_inf = document.createElement('div');
div_counter.classList.add('counter');
div_counter_inf.classList.add('counter_infinity');

function counter(spins){
	auto_button.classList.remove('auto_button');
	auto_content.classList.remove('auto_content');
	auto_button.classList.add('auto_button_stop', 'auto_stop');
	auto_button.append(div_counter);
	control_panel.classList.remove('control_panel');
	control_panel.classList.add('control_panel_stop');
	control_spin.classList.remove('spin');
	control_spin.classList.add('spin_hidden');
	
	const stop = document.querySelector('.auto_stop');
	
	stop.addEventListener('click', function(e){
		count(0);
		auto_button.classList.add('auto_button');
		auto_content.classList.add('auto_content');
		auto_button.classList.remove('auto_button_stop', 'auto_stop');
		document.querySelector('.counter').remove();
		control_panel.classList.remove('control_panel_stop');
		control_panel.classList.add('control_panel');
		control_spin.classList.remove('spin_hidden');
		control_spin.classList.add('spin');
	});
	
	function count(num){
		document.querySelector('.counter').innerHTML = num;
		
		if(num > 0){
			setTimeout(count, 1500, --num);
		}else{
			document.querySelector('.counter').remove();
			auto_button.classList.add('auto_button');
			auto_content.classList.add('auto_content');
			auto_button.classList.remove('auto_button_stop', 'auto_stop');
			control_panel.classList.remove('control_panel_stop');
			control_panel.classList.add('control_panel');
			control_spin.classList.remove('spin_hidden');
			control_spin.classList.add('spin');
		}
	}
	setTimeout(count, 0, spins);
	
}

function counter_inf(){
	auto_button.classList.remove('auto_button');
	auto_content.classList.remove('auto_content');
	auto_button.classList.add('auto_button_stop_infinity', 'auto_stop');
	auto_button.append(div_counter_inf);
	control_panel.classList.remove('control_panel');
	control_panel.classList.add('control_panel_stop');
	control_spin.classList.remove('spin');
	control_spin.classList.add('spin_hidden');
	const stop = document.querySelector('.auto_stop');
	
	stop.addEventListener('click', function(e){
		auto_button.classList.add('auto_button');
		auto_content.classList.add('auto_content');
		auto_button.classList.remove('auto_button_stop_infinity', 'auto_stop');
		document.querySelector('.counter_infinity').remove();
		control_panel.classList.remove('control_panel_stop');
		control_panel.classList.add('control_panel');
		control_spin.classList.remove('spin_hidden');
		control_spin.classList.add('spin');
		
	});
	
}

spins_5.addEventListener('click', function(e){
	counter(5);
});

spins_10.addEventListener('click', function(e){
	counter(10);
});

spins_15.addEventListener('click', function(e){
	counter(15);
});

spins_20.addEventListener('click', function(e){
	counter(20);
});

spins_25.addEventListener('click', function(e){
	counter(25);
});

spins_inf.addEventListener('click', function(e){
	counter_inf();
});