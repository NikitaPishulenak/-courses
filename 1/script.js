var name=prompt("Как тебя зовут?");
(!containNumber(name)) ? alert("output: "+reverseStr(name)) : alert("output: "+transformStr(name));

//Ф-я проверки строки на содержание числа
function containNumber(str){
	var reg=/\d+/;
    return reg.test(str);
}

//Ф-я преобразования строки в обратной последовательности
function reverseStr(str){
	return str.split("").reverse().join("");
}

//Ф-я преобразование строки к разному регистру
function transformStr(str){
	str.toLowerCase().split("");
	var result="";
	for (var i=0; i<=str.length-1; i++){
		(i%2) ? result+=str[i].toUpperCase() : result+=str[i];
	}
	return result;
}