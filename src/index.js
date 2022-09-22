var Book = /** @class */ (function () {
    function Book(name, genre, pageAmount) {
        this.name = '';
        this.genre = '';
        this.pageAmount = 0;
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
    return Book;
}());
var books = [
    new Book('Harry Potter', 'fantasy', 980),
    new Book('Lord of the Ring', 'fantasy', 1001),
    new Book('How to be productive', 'lifestyle', 500),
    new Book('Game of Thrones', 'fantasy', 999)
];
function findSuitableBook(genre, pagesLimit, multipleRecommendations) {
    if (multipleRecommendations === void 0) { multipleRecommendations = true; }
    var findAlgorithm = function (book) {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm) ? books.find(findAlgorithm) : 'Книга не найдена';
    }
}
console.log(findSuitableBook('fantasy', 1000, false));
console.log(findSuitableBook('fantasy', 1000));
