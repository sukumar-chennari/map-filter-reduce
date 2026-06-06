const loans = [
  { id: 1, amount: 5000, status: "Approved" },
  { id: 2, amount: 8000, status: "Rejected" },
  { id: 3, amount: 10000, status: "Approved" }
];


// 1. map() — Transform Everything
const amounts = loans.map(loan => loan.amount);

console.log(amounts); 
// Output: [5000, 8000, 10000] (Same length, data transformed)


// 2. filter() — Cut Out the Noise
const successfulLoans = loans.filter(loan => loan.status === "Approved");

console.log(successfulLoans);
// Output: [{ id: 1, amount: 5000... }, { id: 3, amount: 10000... }] (Shorter array)

// 3. reduce() — Combine Into One Result
const totalDisbursed = loans
  .filter(loan => loan.status === "Approved")
  .reduce((sum, loan) => sum + loan.amount, 0);

console.log(totalDisbursed); 
// Output: 15000 (A single number)

