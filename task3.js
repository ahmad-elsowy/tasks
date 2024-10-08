const book = {
    title : "Book Title",
    author: "Book Auther",
    pages : 100,
    getSummary(){
        return `The book '${this.title}' by '${this.author}' has ${this.pages} pages.`
    }
}

console.log(book.getSummary())