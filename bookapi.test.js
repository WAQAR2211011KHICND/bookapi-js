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

    test('when I add the first book then I expect 1',()=>{
        
        //Arrange
        let cut =  ReadingList;
        let book = new Book("The Hobbit", "J.R.R. Tolkein", 350, 1937);
        cut.addBook(book, "January 1, 2020", 5);

        //Act 
        let actual = cut.numberRead();
        
        //Assert
        expect(actual).toBe(1);

    })


    //3. Given that I have an empty list, when I add additional books to the list 
    // I expect the numberRead to return the total number of books in my list.

    test('when I add the first book then I expect 1',()=>{
        
        //Arrange
        let cut =  ReadingList;
        
        let book1 = new Book("The Hobbit", "J.R.R. Tolkein", 350, 1937);
        let book2 = new Book("Alices Adventures in Wonderland ", "Lewis Carroll", 544, 1865);
        // let books = [book1, book2];
        cut.addBook(book1, "January 1, 2020", 5);
        cut.addBook(book2, "May 22, 1992", 4);

        //Act 
        let actual = cut.numberRead();
        
        //Assert
        // expect(actual).toBe(books.length);
        expect(actual).toBe(2);

    })


})
