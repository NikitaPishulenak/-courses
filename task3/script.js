window.onload=function(){
	var g=gen(400);
	console.log(g.next());
	console.log(g.next(8));
	console.log(g.next(6));
}

//1. Генератор
function* gen(min){
	console.log('Вызван генератор');
	(min<60) ? yield min : yield min/60; //1
	console.log('Генератор отдал значения');//2
	var y = yield;
	console.log(y);
    return "Возвращаю из генератора "+ 2*y;//3
}



//2. Итераторы
function fibonacci() {
    let [fn1,fn2] = [1,1];
    let iterator;
    iterator = function () {
    	
    	let current = fn1;
        fn1 = fn2;
        fn2 = fn2 + current;
        console.log(`fn1=${fn1} fn2=${fn2} current=${current}`);
        return current;
    };
    return iterator;
}

var sequence = fibonacci();
for (var i = 0; i < 10; i++) {
    console.log(sequence()); // 1, 1, 2, 3, 5
}


//Зашифрую строку сместив ее на 1 символ кода
function fIter(str){
	let iter=str[Symbol.iterator]();
	let ret="";
	while(true){
		let res=iter.next();
		if(res.done) {
			return ret;
			break;
		}
		else{
			ret+=String.fromCharCode(res.value.charCodeAt(0)+1);
		}
	}
}

let str="ZЯ строка";
let result=fIter(str);
// alert(result);



//локализация даты
console.group('date');
console.log(new Intl.DateTimeFormat().format(new Date()));
console.log(new Intl.DateTimeFormat('en-US').format(new Date()));
console.log(new Intl.DateTimeFormat('ar-EG').format(new Date()));
console.groupEnd('date');


//Mix-in
//базовый класс
class Poligon{
	test(){
		alert("Вызвана функция test базового класса");
	}
}

//mixin1
const Storage = Sup => class extends Sup {
    save(){
    	alert("Данные сохранены в БД");
    }
};

//mixin2
const Validate = Sup => class extends Sup {
    validate(){
    	alert("Данные проверены");
    }
};

class MultiPoligon extends Storage(Validate(Poligon)){
	deleteFromDB(){
		alert("Данные из БД удалены");
	}
}

let A=new MultiPoligon();
A.deleteFromDB();
A.save();
A.test();
A.validate();
