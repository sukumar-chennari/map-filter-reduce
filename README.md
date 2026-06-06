# map-filter-reduce# JavaScript Array Methods: map(), filter(), and reduce()

A comprehensive guide explaining the differences, purposes, and use cases of JavaScript's three most powerful functional array methods.

---

## ⚡ The Quick Comparison


| Method | Core Purpose | Callback Must Return... | Output Format | Output Array Length |
| :--- | :--- | :--- | :--- | :--- |
| **`map()`** | **Transform** every element in the array. | The new version of the item. | A **new array** of transformed items. | **Same** as the original. |
| **`filter()`** | **Select** elements based on a condition. | A boolean (`true` or `false`). | A **new array** containing only matching items. | **Shorter** (or empty). |
| **`reduce()`** | **Condense** the array into a single result. | The updated running total (accumulator). | A **single value** (number, string, object, array). | **Exactly 1** value. |

---

## 🏗️ Method Syntax & Deep Dive

### 1. Array.prototype.map()
Use `map()` when you want to execute a function on every single item in an array and get a new array containing those modified values.

#### Syntax
```javascript
const newArray = array.map((currentValue, index, array) => {
  return transformedValue;
});
```

#### Code Example
```javascript
const numbers = [1, 2, 3, 4];
// Double every single number
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
```

---

### 2. Array.prototype.filter()
Use `filter()` when you want to scan an array and extract a subset of items that pass a specific evaluation test.

#### Syntax
```javascript
const filteredArray = array.filter((currentValue, index, array) => {
  return true; // Keep the item, or false to drop it
});
```

#### Code Example
```javascript
const ages = [14, 22, 17, 30, 18];
// Keep only ages that are 18 or older
const adults = ages.filter(age => age >= 18);

console.log(adults); // Output: [22, 30, 18]
```

---

### 3. Array.prototype.reduce()
Use `reduce()` when you need to iterate through an array and consolidate all elements into a single aggregate result, like a sum, an object lookup map, or an aggregated string.

#### Syntax
```javascript
const singleValue = array.reduce((accumulator, currentValue, index, array) => {
  return nextAccumulatorValue;
}, initialValue);
```

#### Code Example
```javascript
const expenses = [150, 300, 45];
// Sum up all expenses starting from 0
const totalCost = expenses.reduce((sum, expense) => sum + expense, 0);

console.log(totalCost); // Output: 495
```

---

## ⛓️ Real-World Scenario: Method Chaining

In modern production environments, these methods are frequently chained together sequentially to process complex API structures cleanly without temporary tracking variables.

```javascript
const applications = [
  { id: 1, amount: 5000, status: "Approved" },
  { id: 2, amount: 8000, status: "Rejected" },
  { id: 3, amount: 10000, status: "Approved" }
];

// Goal: Get the total financial amount of only the approved applications
const totalDisbursedCash = applications
  .filter(app => app.status === "Approved") // Step 1: Keep only approved records
  .map(app => app.amount)                  // Step 2: Extract just the numeric amounts
  .reduce((total, amount) => total + amount, 0); // Step 3: Add them up

console.log(totalDisbursedCash); // Output: 15000
```
