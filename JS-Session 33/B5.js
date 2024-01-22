class Book {
    constructor(title, author, publishedYear, isAvailable){
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = true;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`PublishedYear: ${this.publishedYear}`);
        console.log(`IsAvailable: ${this.isAvailable}`);
    }

    borrow() {
        if (this.isAvailable) {
           this.isAvailable = false;
           console.log(`Quyển "${this.title}" đã được mượn.`);
        } else {
           console.log(`Quyển "${this.title}" không có sẵn.`);
        }
    }

    returnBook() {
        if (!this.isAvailable) {
           this.isAvailable = true;
           console.log(`Quyển "${this.title}" đã được trả lại.`);
        } else {
           console.log(`Quyển "${this.title}" đã có sẵn.`);
        }
    }
}

class Library {
    constructor() {
       this.books = [];
    }
  
    addBook(book) {
       this.books.push(book);
    }
  
    displayBooks() {
       console.log('Library Books:');
       this.books.forEach((book) => {
          book.displayInfo();
       });
    }
    isBookAvailable(title) {
        const book = this.books.find((book) => book.title === title);
        if (book) {
          if (book.isAvailable) {
            console.log(`Quyển "${book.title}" có sẵn để mượn`);
          } else {
            console.log(`Quyển "${book.title}" không có sẵn.`);
          }
        } else {
          console.log(`Quyển "${title}" không có ở thư viện.`);
        }
    }  
}

// Tạo đối tượng thư viện
const library = new Library();

// Tạo đối tượng sách
const book1 = new Book('Nhàn', 'Nguyễn Bỉnh Khiêm', 1415);
const book2 = new Book('Việt Bắc', 'Tố Hữu', 1948);
const book3 = new Book('Vợ nhặt', 'Kim Lân', 1945);

// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Hiển thị danh sách sách trong thư viện
library.displayBooks();

// Mượn sách
book1.borrow();

// Trả sách
book1.returnBook();

// Kiểm tra trạng thái sách
library.isBookAvailable('Book 1');
library.isBookAvailable('Book 2');
