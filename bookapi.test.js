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
        expect(bookList.length()).toBe(0);

    })
})
