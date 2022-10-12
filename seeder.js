const { Book } = require("./models/Book");
const { Author } = require("./models/Author");
const { books,authors } = require("./data");
const connectToDb = require("./config/db");
require("dotenv").config();

// Connection To DB
connectToDb();

// Import Books (seeding database)
const importBooks = async () => {
    try {
        await Book.insertMany(books);
        console.log("Books Imported");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

// Import Authors (seeding database)
const importAuthors = async () => {
    try {
        await Author.insertMany(authors);
        console.log("Authors Imported");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

// Remove Books
const removeBooks = async () => {
    try {
        await Book.deleteMany();
        console.log("Books Removed!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if(process.argv[2] === "-import") {
    importBooks();
} else if (process.argv[2] === "-remove") {
    removeBooks();
} else if (process.argv[2] === "-import-authors") {
    importAuthors();
}