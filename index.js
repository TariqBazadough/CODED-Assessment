// Q1:
// Write a JavaScript function that takes a customer's name and account balance and returns a string in the format: "CustomerName has a balance of balance KD."
function formatCustomerBalance(customerName, balance) {
  // Write code here

  console.log(`${customerName} has a ${balance}`);
}
// console.log(formatCustomerBalance);

formatCustomerBalance("John Doe", 150); // => "John Doe has a balance of 150 KD."
formatCustomerBalance("Jane Doe", 250); // => "John Doe has a balance of 250 KD."

// Q2:
// Write a JavaScript function that takes an array of objects representing books and returns an array of titles published after 2010.

function getBooksPublishedAfter2010(books) {
  // Write code here
  // const book = getBooksPublishedAfter2010.fitler()
  // books[1].year >= 2012;
  // return books[1];
  // return (books) => books.year >= 2010;
  // return (books = books.year >= 2010);
  books.forEach((books) => {
    console.log(books.year);
  });
}

// movies.forEach((movies) => {
//   console.log(movies.title);
// });
// console.log(updatesMovies(movies));
// console.log(getBooksPublishedAfter2010[2]);
// console.log(getBooksPublishedAfter2010[books]);
// const newbook = getBooksPublishedAfter2010.((books) => books.year >= 2010);

// console.log(newbook);

// const getBooks2010 = getBooksPublishedAfter2010.filter(
//   (books) => books.year >= 2010
// );
// console.log(getBooksPublishedAfter2010);
// const bookTitle = getBooksPublishedAfter2010.map((books) => books.title);

getBooksPublishedAfter2010([
  {
    title: "Book One",
    year: 2012,
    author: "Author A",
    genre: "Fiction",
    pages: 320,
  },
  {
    title: "Book Two",
    year: 2008,
    author: "Author B",
    genre: "Non-fiction",
    pages: 215,
  },
  {
    title: "Book Three",
    year: 2015,
    author: "Author C",
    genre: "Sci-Fi",
    pages: 289,
  },
]); // => ["Book One", "Book Three"]

// Q3
// Write a JavaScript function that takes an array of product objects and returns the total price of all products in the category "electronics".

function getTotalPriceOfElectronics(products) {
  //   // Write code here
  //   const total = 0;
  //   const newPoducts = products.filter((product) => {
  //     product.category === "electronics", price;
  //     for (let index = 0; index < products.length; index++) {
  //       total += price[index];
  //     }
  //     console.log(newPoducts);
  //   });
}

getTotalPriceOfElectronics([
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "Book", category: "books", price: 30 },
  { name: "Smartphone", category: "electronics", price: 699 },
]); // => 1698

// Q4:
// Write a JavaScript function that takes an array of customer objects and returns a summary string for each customer, including their name and account balance.
function getCustomerSummary(customers) {
  // Write code here
  console.log(customers);

  //console.log(`${customers.name} has a balance of ${customers.balance}`);
}

getCustomerSummary([
  { name: "Alice", balance: 300 },
  { name: "Bob", balance: 500 },
]); // => ["Alice has a balance of 300 KD.", "Bob has a balance of 500 KD."]

// console.log(`${customers.name} has a balance of ${customers.balance}`);
