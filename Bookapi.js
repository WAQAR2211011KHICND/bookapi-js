
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

                return [];
            },

            addBook: function(book, dateRead, rating){

                // this.BookItem = 
                this.BookItem.push({book, dateRead, rating})
                // , ...this.BookItem];
            },

            numberRead: function(){
                return this.BookItem.length;
            }

        };


        module.exports = { ReadingList , Book };