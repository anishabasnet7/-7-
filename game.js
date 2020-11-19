var scores,roundScore,activePlayer,gamePlaying;
roundScore=0;
activePlayer=0;
gamePlaying=true;
scores=[0,0];

document.getElementById('current--0').textContent="0";
document.getElementById('name--0').textContent="Player";

document.querySelector('.btn--new').addEventListener('click', function () {
	activePlayer=0;
	gamePlaying=true;
	scores=[0,0];
	document.getElementById('current--0').textContent="0";
	document.getElementById('name--0').textContent="Player";
});
document.querySelector('.btn--roll').addEventListener('click', function () {
	if(gamePlaying){
	var dice0=Math.floor(Math.random()*6)+1;
	var diceDom0 = document.querySelector('.dice0');
	diceDom0.style.display='block';
	diceDom0.src='dice-'+dice0+'.png';
	console.log(dice0);

	var dice1=Math.floor(Math.random()*6)+1;
	var diceDom1 = document.querySelector('.dice1');
	diceDom1.style.display='block';
	diceDom1.src='dice-'+dice1+'.png';
	console.log(dice1);
	roundScore=dice0+dice1;

	if((dice0+dice1)>7){
	document.querySelector('#current--'+activePlayer).textContent=roundScore;
	document.querySelector('#name--' + activePlayer).textContent="UPPER!";
	}
	else if((dice0+dice1)<7){
	document.querySelector('#current--'+activePlayer).textContent=roundScore;
	document.querySelector('#name--' + activePlayer).textContent="LOWER!";
	}
	else{
	document.querySelector('#current--'+activePlayer).textContent=roundScore;
	document.querySelector('#name--' + activePlayer).textContent="7";
	}

	}
});

