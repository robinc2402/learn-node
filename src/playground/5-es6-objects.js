// Object property shorthand

const name = "Robin";
const age = "32";
const user = {
  name,
  age,
  location: "Gurugram"
};

console.log(user);

// object destructuring

const product = {
  label: "red",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 3.2
};

// const { label: pLabel, stock, rating = 10 } = product;

// console.log(pLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
