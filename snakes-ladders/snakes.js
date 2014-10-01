var clicks=1;
var q=10;
var users = 2;
var ladders = {10:33,16:55,97:37}
var b=0;
var a=0;
$(document).ready(function(){
	for(var i = 0; i<10; i++) {
		$('table').append('<tr></tr>');
		for(var j = 0; j <10; j++) {
			if(i%2==0){
				$('table').find('tr').eq(i).append('<td id='+((q*10)-(j))+'>'+((q*10)-(j))+'</td>');	
			}
			else{
				$('table').find('tr').eq(i).append('<td id='+(((q-1)*10)+(j+1))+'>'+(((q-1)*10)+(j+1))+'</td>');
			}
		}
		q--;
	}

	$('.ball').click(function(){
		$('.ball').effect( "bounce", {times:3}, 900);	
		var k = Math.floor(Math.random()*6 + 1);
		$('.ball').text(k);

		if(clicks==1){
			a=a+k;
			for(var key  in ladders) {
				if(key==a){
					a=ladders[key]
				}
			}
				if(a==100){
					$('#' + a).append($('.image1'));
					alert("Player1 wins the game");
				}
				else if(a>100){
					a=a-k;
					alert("unable to move");
				}
				else{	
					
					$('#' + a).append($('.image1'));	
				}
				
				
			}

			else if(clicks==2)
			{
				b=b+k;
				for(var key  in ladders) {
					if(key==b){
						b=ladders[key]
					}}
					if(b==100){
						$('#' + b).append($('.image2'));
						alert("Player2 wins the game");
					}
					else if(b>100){
						b=b-k;
						alert("unable to move");
					}
					else{	
						
						$('#' + b).append($('.image2'));	
					}} 
					if([4,6].indexOf(k) < 0){
						clicks=(clicks < users) ? (clicks+1):1
					}
					$('.player').text("Now Player"+clicks);
					
				});
});
