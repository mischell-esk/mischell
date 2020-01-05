$(document).ready(topnav);

var contador = 1;

function topnav(){
	$('.topnav').click(function(){

		if(contador==1){
			$('nav').animate({
				left:'0'
			});
			contador = 0;
		} else {
			$('nav').animate({
				left:'-100%'
			});
		}
	});
};
