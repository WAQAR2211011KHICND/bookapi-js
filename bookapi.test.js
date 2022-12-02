const Bookapi = require('./Bookapi');

const  {ReadingList, Book } = Bookapi;

describe('Book Api testing',()=>{
    
    //1. Given that I visit the site, when I first start, I expect my list to be empty.
    test('when i first visit site it will be empty',()=>{
        
        //Arrange
        let cut =  ReadingList;

        //Act 
        let bookList = cut.getBooks();
        
        //Assert
        expect(bookList.length).toBe(0);

    })

    // 2. Given that I have an empty list, when I add the first book to my list then 
    // I expect numberRead to return 1.

    test('when i first visit site it will be empty',()=>{
        
        //Arrange
        let cut =  ReadingList;
        let book = new Book("The Hobbit", "J.R.R. Tolkein", 350, 1937);
        cut.addBook(book, "January 1, 2020", 5);

        //Act 
        let actual = cut.numberRead();
        
        //Assert
        expect(actual).toBe(1);

    })




})
