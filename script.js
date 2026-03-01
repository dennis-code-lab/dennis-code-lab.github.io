// Elements
const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

// State
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let total = 0;

// Load saved expenses on page load
window.addEventListener("DOMContentLoaded", loadExpenses);

// Form submit
expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = expenseName.value.trim();
  const amount = Number(expenseAmount.value);

  if (name === "" || amount <= 0) {
    alert("Please enter a valid expense");
    return;
  }

  const expense = { name, amount };

  expenses.push(expense);
  saveExpenses();

  addExpenseToDOM(expense);
  updateTotal(amount);

  expenseName.value = "";
  expenseAmount.value = "";
});

// Load expenses
function loadExpenses() {
  expenseList.innerHTML = "";
  total = 0;

  expenses.forEach(expense => {
    addExpenseToDOM(expense);
    total += expense.amount;
  });

  totalAmount.textContent = total.toFixed(2);
}

// Add expense to DOM
function addExpenseToDOM(expense) {
  const li = document.createElement("li");
  li.classList.add("expense-item");

  const span = document.createElement("span");
  span.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    expenses = expenses.filter(e => e !== expense);
    saveExpenses();
    loadExpenses();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  expenseList.appendChild(li);
}

// Save to localStorage
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Update total
function updateTotal(amount) {
  total += amount;
  totalAmount.textContent = total.toFixed(2);
}