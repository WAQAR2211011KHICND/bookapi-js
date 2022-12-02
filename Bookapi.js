
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
                this.BookItem.push({book, dateRead, rating})
            },

            numberRead: function(){
                return this.BookItem.length;
            },

            //Because we have use the object pattern instead of class we have to reset the object (readingList)

            resetReadingList: function(){
                this.BookItem = [];
            }
        };


        module.exports = { ReadingList , Book };