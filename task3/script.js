window.onload=function(){
	var g=gen(400);
	//var res=g.next();
	//console.log(`value: ${res.value}, done: ${res.done}`);
	console.log(g.next());
	console.log(g.next());
	console.log(g.next());
	//g.send(100);

}

function* gen(min){
	console.log('Вызван генератор');
	(min<60) ? yield min : yield min/60;
	console.log('Генератор отдал значения');
	var y = yield;
    return "Возвращаю из генератора "+ 2*y;
}


