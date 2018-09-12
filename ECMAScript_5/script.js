function showError(error) {
  var message = "An error occured";
  if (error.message) {
      message = error.message;
  } else if (error.errors) {
      var errors = error.errors;
      message = "";
      Object.keys(errors).forEach(function(k) {
          message += k + ": " + errors[k] + "\n";
      });
  }
  alert(message);
}

document.addEventListener("DOMContentLoaded", function(event) { 
  loadBooks();

  function loadBooks() {
    dpd.books.get(function(books, error) {
      books.forEach(function(book) { 
        addBook(book);
      });
    });
  }

  function addBook(book) {
    var a=new Book(book.title, book.author, book.pubYear, book.faculty, book.price, book.duration, book.format);

    var editLink = $('<a href="#">E</a>');
    var deleteLink = $('<a href="#">D</a>');
    var infoLink = $('<a href="#">I</a>');

    var booksBlock=document.getElementById("booksInfo");

    var div = $('<tr class="books">').append('<td class="title">'+a.getTitle()+'</td><td class="author">'+a.getAuthor()+
      '</td><td class="year">'+a.getPubYear()+'</td><td class="fac">'+a.getFaculty()+'</td><td class="price">'+a.getPrice()+'</td>')
      .append(infoLink).append("<span>  /  </span>").append(editLink).append("<span>  /  </span>").append(deleteLink)
      .appendTo('#books');
    

        
    deleteLink.click(function() {
      var isDel=confirm("Вы действительно жедаете удалить запись?");
      if(isDel){
        dpd.books.del(book.id, function(success, error) {
          if (error) 
            return showError(error);
          div.remove();
        });
      }
      return false;
    });
    

    editLink.click(function() {
      var infoBlock=document.getElementById("detail");
      dpd.books.get(book.id, function(success, error) { 
        if (error) 
            return showError(error);

          var result='<form name="edtForma"><strong>Редактирование записи:</strong><input type="hidden" id="typeB" value="'+book.typeB+'"><br><p><label for="title">Название книги<em>*</em></label><br><input type="text" class="checkI" '+
        'id="title" required pattern="\w+{2,50}" maxlength="50" value="'+book.title+'"></p>'+
        '<p><label for="author">Автор<em>*</em></label><br><input type="text"  class="checkI" id="author" required'+
        'pattern="^\w+{2,50}$" placeholder="Пушкин А.С." maxlength="30" value="'+book.author+'"></p>'+
        '<p><label for="pubYear">Год публикации<em>*</em></label><br><input type="text"  class="checkI" id="pubYear" '+
        'placeholder="2017" required maxlength="4" min="1700" max="2018" value="'+book.pubYear+'"></p>'+
        '<p><label for="pubOffice">Издательство<em>*</em></label><br><input type="text"  class="checkI" id="pubOffice"'+
        'required pattern="^\w+{2,50}{2,50}$" maxlength="50" value="'+book.pubOffice+'"></p>'+
        '<p><label for="faculty">Область науки<em>*</em></label><br><input type="text"  class="checkI" id="faculty"'+
        'required pattern="^\w+{2,50}$" maxlength="50" value="'+book.faculty+'"></p>'+
        '<p><label for="price">Цена<em>*</em></label><br><input type="number"  class="checkI" id="price" required maxlength="8" value="'+book.price+'"></p>';

        if(book.typeB==1){
          result+='<p><label for="duration">Длительность(мин)<em>*</em></label><br><input type="text" class="checkI" id="duration"'+
          ' required min="1" maxlength="5" pattern="[\d]{,5}" value="'+book.duration+'"></p>'+
          '<p><label for="format">Формат аудио<em>*</em></label><br><input type="text" class="checkI" id="format" placeholder=".mp3" '+
          'required  maxlength="6" value="'+book.format+'"></p>';
        }
        else if(book.typeB==2){
          (book.complementCD==1) ? result+='<p><label for="complementCD">Прилагается CD</label><input type="checkbox" id="complementCD" checked/></p>' : 
          result+='<p><label for="complementCD">Прилагается CD</label><input type="checkbox" id="complementCD" /></p>';
          
          result+='<p><label for="isbnNumb">ISBN номер<em>*</em></label><br><input type="text" class="checkI" id="isbnNumb" required  placeholder="15243" '+
          ' maxlength="5" value="'+book.isbnNumb+'"></p>';
        }

        result+='<p><input type="submit" value="Сохранить" id="button_edit"></p></form>';
        infoBlock.innerHTML=result;
        
        document.forms['edtForma'].onsubmit = function(){ 
          switch (document.getElementById("typeB").value) {
            case "1":
              dpd.books.put(book.id, {
                  title: document.getElementById("title").value,
                  author: document.getElementById("author").value,
                  pubYear: document.getElementById("pubYear").value,
                  pubOffice: document.getElementById("pubOffice").value,
                  faculty: document.getElementById("faculty").value,
                  price: document.getElementById("price").value,
                  duration: document.getElementById("duration").value,
                  format: document.getElementById("format").value
                }, function(result, error) {
                if (error) { return showError(error); }
                else{
                  alert("Редактирование аудио успешно произведено!");
                  window.location.reload();
                  //loadBooks();
                }
              });
              break;
            case "2":
              var compCD=(document.getElementById("complementCD").checked) ? "1" : "0";
              dpd.books.put(book.id, {
                  title: document.getElementById("title").value,
                  author: document.getElementById("author").value,
                  pubYear: document.getElementById("pubYear").value,
                  pubOffice: document.getElementById("pubOffice").value,
                  faculty: document.getElementById("faculty").value,
                  price: document.getElementById("price").value,
                  complementCD: compCD,
                  isbnNumber: document.getElementById("isbnNumb").value
                }, function(result, error) {
                if (error) { return showError(error); }
                else{
                  alert("Редактирование печатной книги успешно произведено!");
                  window.location.reload();
                }
              });
              break;
          }
          
       return false;  
        
       }    
      });
      
       return false;    
    });

    infoLink.click(function(){
      var infoBlock=document.getElementById("detail");
      dpd.books.get(book.id, function(success, error) { 
        if (error) 
            return showError(error);
          var result="<strong>Подробная Информация:</strong><br>";
          result+="<p><strong>Название книги: </strong>"+book.title+"</p><p><strong>Автор: </strong>"+book.author+"</p>"+
          "<p><strong>Год издания: </strong>"+book.pubYear+"</p><p><strong>Издательство: </strong>"+book.pubOffice+"</p><p><strong>Область науки: </strong>"+book.faculty+"</p>"+
          "<p><strong>Цена: </strong>"+book.price+"</p>";
          (book.duration) ? (result+="<p><strong>Длительность: </strong>"+book.duration+"</p>") : "";
          (book.format) ? (result+="<p><strong>Формат аудио: </strong>"+book.format+"</p>") : "";
          (book.complementCD) ? (result+="<p><strong>Диск прилагается: </strong>"+book.complementCD+"</p>") : "";
          (book.isbnNumber) ? (result+="<p><strong>ISBN номер: </strong>"+book.isbnNumber+"</p>") : "";
          
          infoBlock.innerHTML=result;
      });
       // window.open("details.html?id="+book);
    });
  }

});