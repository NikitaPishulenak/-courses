//Ф-я изменения внешнего вида страницы
function changeStyle(){
	var btns=document.querySelectorAll('button');
	for(var i=0; i<btns.length; i++){
		btns[i].classList.add("btn");
	}
	document.querySelector('body').style.backgroundColor = '#c0c0c0';
	var cont=document.getElementById('content');
	cont.style.left = '50%';
	cont.style.top = '50%';
	cont.style.position = 'absolute';
	cont.style.transform = 'translate(-50%, -50%)';
}

//Ф-я очистки экрана и рисования макета flexbox
function writeFlex(){
	document.body.innerHTML="";
	document.body.style.backgroundColor = '';
	var d=document.createElement('div');
	d.className='container';
	document.body.appendChild(d);
	var rnd=Math.floor(Math.random() * 15) + 10;
	for(var i=0; i<rnd; i++){
		var div = document.createElement('div');
		div.className='litleBlock';
		div.innerHTML=i+1;
		d.appendChild(div);
	}
	

}