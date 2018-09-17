//Конструктор родителя
function Book(title, author, pubYear, faculty, price){
	this.title=title;
	this.author=author;
	this.pubYear=pubYear;
	this.faculty=faculty;
	this.price=price;


	this.getTitle=()=>this.title;
	this.setTitle=tit=>this.title=tit;

	this.getAuthor=()=>this.author;
	this.setAuthor=auth=>this.author=auth;

	this.getPubYear=()=>this.pubYear+"г.";
	
	this.setPubYear=function(year){
		if(year>=1700 && year<=2018){
			this.pubYear=year;
		}else if(year<1700){
			this.pubYear=1700;
		}
		else if(year>2018){
			this.pubYear=2018;
		}
	}


	this.getFaculty=()=>this.faculty;
	this.setFaculty=fac=>this.faculty=fac;

	this.getPrice=()=>this.price+" руб.";
	this.setPrice=function(price){
		if(price>0 && price<1000000){
			this.price=price;
		}else if(price<=0){
			this.price=0;
		}else if(price>=1000000){
			this.price=1000000;
		}
	}
}


//Конструктор 1-го наследника
function Audio(title, author, pubYear, faculty, price, duration, format){
	Book.apply(this, arguments);
	this.duration=duration;
	this.format=format;


	this.getDuration=()=>this.duration+" мин.";
	this.setDuration=function(dur){
		if(dur>0 && dur<100000){
			this.duration=dur;
		}else{
			this.duration=1;
		}
	}


	this.getFormat=()=>this.format;
	this.setFormat=form=>this.format=form;
}


//Конструктор 2-го наследника
function Manual(title, author, pubYear, faculty, price, pubOffice, complementCD, ibsnNumber){
	Book.apply(this, arguments);
	this.pubOffice=pubOffice;
	this.complementCD=complementCD;
	this.ibsnNumber=ibsnNumber;


	this.getComplementCD=function(){
		var res;
		(this.complementCD==1) ? res="Да" : res="Нет";
		return res;
	}
	this.setComplementCD=function(compl){
		(compl==1) ? this.complementCD=1 : this.complementCD=0;
	}

	this.getISBNNumber=()=>this.ibsnNumber;
	this.setISBNNumber=numb=>this.ibsnNumber=numb;

	this.getPubOffice=()=>this.pubOffice;
	this.setPubOffice=office=>this.pubOffice=office;
}

// var b1=new Audio("Сказка", "Народы мира", "2000", "Сказки", "1,3", "21", "mp3");
// var b2=new Manual("Муму", "Тургенев И.С.", "2011", "Рассказ", "12,1", "Белый свет", "1", "54362");
// var b3=new Manual("Солдат Швейк", "Гашек Я.", "1987", "Роман", "26", "Асвета", "1", "04321");


//  window.onload = function() {
//  	var elTable=document.getElementById("book-table");

//     var newLi = document.createElement('table');
//   	newLi.innerHTML = "<th class='title'>Название книги</th><th class='author'>Автор</th><th class='year'>"+
//   	"Год изд.</th><th class='fac'>Обл. науки</th><th class='price'>Цена</th><th class='make'>Действие</th>";
//   	elTable.appendChild(newLi);
  	
//   	elTable.appendChild(createTR(b1));
//   	elTable.appendChild(createTR(b2));
//   	elTable.appendChild(createTR(b3));
//   	// elTable.appendChild("</table>");


// 	// console.log(elA.length);
// 	//elA.addEventListener("click", function(){console.log("1");}, false);

//  }



// function createTR(obj){
// 	var nextLine=document.createElement('tr');
//   	nextLine.innerHTML=createTable(obj);
//   	return nextLine;
// }


// function createTable(obj){
// 	var title = obj.getTitle();
// 	var author = obj.getAuthor();
// 	var year = obj.getPubYear();
// 	var fac = obj.getFaculty();
// 	var price = obj.getPrice();

// 	return '<tr class="tableLine"><td class="title"><span>' + title + '</span></td><td class="author"><span>' 
// 		+ author + '</span></td><td class="year"><span>' + year + '</span></td><td class="fac"><span>' 
// 		+ fac + '</span></td><td class="price"><span>' + price + '</span></td>'+
// 		'<td class="make"><a href="#">редактировать</a> / <a href="#" class="del">удалить</a></td></tr>';
// }

// function checkFormAdd(){
// 	var form=document.getElementById("formAddBook");
// 	var elsements=form.getElementsByClassName("checkI");
// 	var isGood=true;
// 	console.log(elsements);
// 	for(var i=0; i<elsements.length; i++){
// 		console.log(document.getElementById(elsements[i].id).value);
// 		if(document.getElementById(elsements[i].id).value==""){
// 			isGood=false;
// 		}		
// 	}
// 	return isGood;
// }