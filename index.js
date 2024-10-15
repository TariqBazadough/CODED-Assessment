// Q1:
// Write a JavaScript function that takes a customer's name and account balance and returns a string in the format: "CustomerName has a balance of balance KD."
function formatCustomerBalance(customerName, balance) {
  const customers = customers.forEach((customer) => balance);
  return customers;
}

formatCustomerBalance("John Doe", 150); // => "John Doe has a balance of 150 KD."
formatCustomerBalance("Jane Doe", 250); // => "John Doe has a balance of 250 KD."
console.log(formatCustomerBalance);
// Q2:
// Write a JavaScript function that takes an array of objects representing books and returns an array of titles published after 2010.

function getBooksPublishedAfter2010(books) {
  const result = books.filter((titles) => title > 2010);
  return books;
}
console.log(result);

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
  const electronics = products.map((product) => product.price);
  return electronics;
}

getTotalPriceOfElectronics([
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "Book", category: "books", price: 30 },
  { name: "Smartphone", category: "electronics", price: 699 },
  console.log(getTotalPriceOfElectronics),
]); // => 1698

// Q4:
// Write a JavaScript function that takes an array of customer objects and returns a summary string for each customer, including their name and account balance.
function getCustomerSummary(customers) {
  return customers;
}

getCustomerSummary([
  { name: "Alice", balance: 300 },
  { name: "Bob", balance: 500 },
]); // => ["Alice has a balance of 300 KD.", "Bob has a balance of 500 KD."]
console.log(getCustomerSummary);
