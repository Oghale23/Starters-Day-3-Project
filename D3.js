//TASK 1
const language = [
  "JavaScript",
  "CSS",
  "Python",
  "C++",
  "Java",
  "PHP",
  "Sql",
  "c",
];
console.log(language[0]);
console.log(language.at(-1));
console.log(language[3]);
console.log(language.length);
console.log(language);
language.push("GO");
console.log(language);
console.log(language.splice(4, 1));
language[3] = "HTML";
console.log(language);
// Indexes starts at zero because JavascriPt reads it as that knowing that nothing comeS before
// the first index
// When you access an index that does not exist, you get "undefined".

// TASK 2
const scores = [35, 92, 65, 88, 54, 71, 96, 83];
// Total Score
let totalScore = 0;
for (const number of scores) {
  totalScore = totalScore + number;
}
console.log(totalScore);
console.log(scores.length);
// AverageScore
const averageScore = totalScore / scores.length;
console.log(averageScore);
// Highest Score
const highestScore = Math.max(...scores);
console.log("Highest Score:", highestScore);
// LowestScore
const lowestScore = Math.min(...scores); //...scores unpacks the array to ensure that math. max/min can receive the individual number
console.log("Lowest Score:", lowestScore);
// No. of students that passed/failed
let passed = 0;
let failed = 0;
for (const score of scores) {
  if (score >= 50) {
    passed++;
  } else {
    failed++;
  }
}

console.log("Number of students who passed:", passed);
console.log("Number of studets who failed:", failed);
// Analyze Scores
function analyzeScores(scores) {
  let totalScore = 0;
  let highestScore = 0;
  let lowestScore = 0;
  let passed = 0;
  let failed = 0;
  for (const score of scores) {
    totalScore = totalScore + score;
  }
  if (scores > highestScore) {
    highestScore = score;
  }
}
if (scores < lowestScore) {
  lowestScore = score;
} else {
  if (scores >= 50) {
    passed++;
  } else {
    failed++;
  }
}

console.log("Lowest Score:", lowestScore);
console.log("Highest Score:", highestScore);
console.log("Number of students who passed:", passed);
console.log("Number of students who failed:", failed);

// shopping Cart/ TASK 3
const cart = [
  { name: "Ruler", price: 850, quantity: 1 },
  { name: "Pencil", price: 600, quantity: 6 },
  { name: "Calculator", price: 120, quantity: 3 },
  { name: "Stapler", price: 45, quantity: 8 },
  { name: "Pen", price: 25, quantity: 5 },
];
console.log(cart.length);
// totalCartValue
let totalQuantity = 0;
for (const product of cart) {
  totalQuantity = totalQuantity + product.quantity;
}
console.log(totalQuantity);
// Most expensive and cheapest product
const price = cart.map((product) => product.price);
const highestPrice = Math.max(...price);
const lowestPrice = Math.min(...price);
const mostExpensive = cart.find((product) => product.price === highestPrice);
const cheapest = cart.find((product) => product.price === lowestPrice);

console.log("Most Expensive Product:", mostExpensive.name, mostExpensive.price);
console.log("Cheapest Product:", cheapest.name, cheapest.price);

//Actual total value
let totalCartValue = 0;
let totalCartQuantity = 0;
for (const product of cart) {
  totalCartValue += product.price * product.quantity;
  totalCartQuantity += product.quantity;
}
console.log("Total Quantity:", totalCartQuantity);
console.log("Actual Cart Value:", totalCartValue);
// TASK 4
const users = [
  { name: "John", email: "john@gmail.com", role: "admin" },
  { name: "Mary", email: "mary@gmail.com", role: "designer " },
  { name: "Joy", email: "joy@gmail.com", role: "manager" },
  { name: "Joseph", email: "joseph@gmail.com", role: "developer" },
  { name: "Comfort", email: "comfort@gmail.com", role: "engineer" },
];
// Find user be email
function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}
// Find Admin
console.log(findUserByEmail("joy@gmail.com"));
function findAdmin() {
  return users.filter((user) => user.role === "admin");
}
console.log(findAdmin());
// Check if a User Exists
function userExists(name) {
  return users.some((user) => user.name === name);
}
console.log("Does John exist?", userExists("John"));
// Find users by Role
function usersRole(role) {
  return users.filter((user) => user.role === role);
}
console.log(usersRole("developer"));

// What the function retuns when document is not found
const user = findUserByEmail();
if (user === undefined) {
  console.log("User not Found");
} else {
  console.log("user found:, user.name");
}

// TASK 5
const prices =[1000, 2500, 5000, 7500, 10000]
// Discounted prices
const discountedPrices = prices.map(price => price * 0.9)
console.log(discountedPrices)
// Prices Above 5000
const pricesAbove5000 = prices.filter(price =>price > 5000)
console.log(pricesAbove5000)
// Prices Below 5000
const pricesBelow5000 = prices.filter(price =>price < 5000)
console.log(pricesBelow5000)
// Sort Prices From Low to High
const sortPrices = prices.sort((a,b) => b-a);
console.log(sortPrices)
// filter() selects item that meets a certain condition.
// sort() arranges items in order.
// map() takes an item and transfer it.