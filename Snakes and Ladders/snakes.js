var clicks=1;
var q=10;
var users = 2;
var ladders = {10:33,16:55,97:37,39:17,88:51,74:96}
var b=0;
var a=0;
$(document).ready(function(){
	for(var i = 0; i<10; i++) {
		$('table').append('<tr></tr>');
		for(var j = 0; j <10; j++) {
			var column1 = ((q*10)-(j));
			var column2 = (((q-1)*10)+(j+1));
			if(i%2==0){
				$('table').find('tr').eq(i).append('<td id='+column1+'>'+column1+'</td>');	
			}
			else{
				$('table').find('tr').eq(i).append('<td id='+column2+'>'+column2+'</td>');
			}
		}
		q--;
	}
	$('.ball').click(function(){
		$('.ball').effect( "bounce", {times:3}, 900);	
		var k =  Math.floor(Math.random()*6 + 1);
		$('.ball').text(k);
		if(clicks==1){
			a=process(a,k,clicks);
		}
		else if(clicks==2)
		{
			b=process(b,k,clicks);
		}
		if([4,6].indexOf(k) < 0){
			clicks=(clicks < users) ? (clicks+1):1
		}
		$('.player').text("Now Player"+clicks);


	});
});
var process=function(c,h,move)
{
	c=c+h;
	if(ladders[c]) {
		c = ladders[c];
	}
	if(c==100){
		$('#' + c).append($('.image'+move));
		alert("Game wins By : player"+move );
	}
	else if(c>100){
		c=c-h;
		alert("unable to move");
	}
	else{	
		$('#' + c).append($('.image'+move));	
	}
	return c;
}

