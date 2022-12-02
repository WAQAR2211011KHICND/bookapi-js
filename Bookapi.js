
        class Book{

            title  = '';
            author = '';
            length = 0 ;
            year   = 0 ;

            constructor(title, author, length, year){
                this.title = title;
                this.author = author;
                this.length = length;
                this.year = year;
            }
        }


        let ReadingList = {
            
            BookItem : [],
            getBooks: function(){

                let tempBooks = [];
                
                BookItem.forEach(element => {
                    let title = element.book.title;
                    let author = element.book.author;
                    let length = element.book.length;
                    let year = element.book.year;
                    let dateRead = element.dateRead;
                    let rating = element.rating;
                    let ratingStar = '';
                    for (let index = 0; index < rating; index++) {
                        ratingStar = ratingStar + "*";
                        
                    }
                   
                    tempBooks.push([`${title} by ${author}, ${length} pages, ${year} read on ${dateRead}, ${ratingStar}`]);
                });

                return tempBooks;
            },

            addBook: function(book, dateRead, rating){
                this.BookItem.push({book, dateRead, rating})
            },

            numberRead: function(){
                return this.BookItem.length;
            },

            deleteBook: function(title){

                for (let index = 0; index < BookItem.length; index++) {

                    if(title === BookItem.book.title){
                        delete BookItem[index];
                        break;
                    }

                }

            },


            //Because we have use the object pattern instead of class we have to reset the object (readingList)
            resetReadingList: function(){
                this.BookItem = [];
            }


        };


        module.exports = { ReadingList , Book };