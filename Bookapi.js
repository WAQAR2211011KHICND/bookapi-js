
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
            


            getBooks: function(){

                return [];
            }

            addBook: function(){


            }

            numberRead: function(){
                
            }

        };


        module.exports = { ReadingList , Book };