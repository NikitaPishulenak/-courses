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



//локализация
let number = 123456.789;
        
        console.group('numbers');
        console.log(new Intl.NumberFormat('en-CA', { style: 'decimal'}).format(number));
        console.log(new Intl.NumberFormat('ar-EG', { style: 'decimal'}).format(number));
        console.log(new Intl.NumberFormat('fr-CA', { style: 'decimal'}).format(number));
        console.groupEnd('numbers');
        
        console.group('currency');
        console.log(new Intl.NumberFormat('cn-CY', { style: 'currency', currency: 'CNY' }).format(number));
        console.log(new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(number));
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
        console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
        console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
        console.groupEnd('currency');
