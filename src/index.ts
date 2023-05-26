class Book {
  name = '';
  genre = '';
  pageAmount = 0;

  constructor(name: string, genre: string, pageAmount: number) {
    this.name = name
    this.genre = genre
    this.pageAmount = pageAmount
  }
}

const books: Book[] = [
  new Book('Harry Potter', 'fantasy', 980),
  new Book('LOTR', 'fantasy', 1001),
  new Book('BOOK2', 'lifestyle', 500),
  new Book('GoT', 'fantasy', 999)
]

function findSuitableBook(genre: string, pagesLimit: number, multipleRecommendations: boolean = true): Book | Book[] {
  const findAlgorithm = (book: Book) => {
    return book.genre === genre && book.pageAmount <= pagesLimit
  }

  return multipleRecommendations ? books.filter(findAlgorithm) : books.find(findAlgorithm);
}

console.log(findSuitableBook('fantasy', 1000));
