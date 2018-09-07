//Ф-я изменения внешнего вида страницы
function Book(title, author, pubOffice, pubYear, faculty, price){
	this.title=title;
	this.author=author;
	this.pubOffice=pubOffice;
	this.pubYear=pubYear;
	this.faculty=faculty;
	this.price=price;

	this.getFullInfoAboutBook=function(){
		return "Автор книги: "+ this.author + "\nНазвание книги: "+ this.title +"\nИдательство: "+this.pubOffice;
	}
	
}

function Audio(title, author, pubOffice, pubYear, faculty, price, duration, format){
	Book.apply(this, arguments);
	this.duration=duration;
	this.format=format;
}

function Manual(title, author, pubOffice, pubYear, faculty, price, bindingType, complementCD, ibsnNumber){
	Book.apply(this, arguments);
	this.bindingType=bindingType;
	this.complementCD=complementCD;
	this.ibsnNumber=ibsnNumber;
}

var n = document.getElementById("tb").options.selectedIndex;
// sel.style.color = '#ff44dd';
console.log(n);