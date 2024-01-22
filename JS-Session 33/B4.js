// Đối tượng sách
class Book {
    constructor(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
    }
  
    displayInfo() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Published Year: ${this.publishedYear}`);
      console.log('------------------------');
    }
  }
  
  // Đối tượng thư viện sách
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
  }
  
  // Tạo đối tượng thư viện
  const library = new Library();
  
  // Tạo đối tượng sách
  const book1 = new Book('Tắt đèn', 'Ngô Tất Tố', 1945);
  const book2 = new Book('Chuyện người con gái Nam Xương', 'Nguyễn Dữ', 1898);
  const book3 = new Book('Làng', 'Kim Lân', 1954);
  
  // Thêm sách vào thư viện
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  // Hiển thị danh sách sách trong thư viện
  library.displayBooks();
