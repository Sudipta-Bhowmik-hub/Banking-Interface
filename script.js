let balance = 0;

function updateBalance() {
  document.getElementById("balance").textContent = `$${balance}`;
}

function deposit() {
  balance += 10;
  updateBalance();
}

function withdraw() {
  if (balance >= 10) {
    balance -= 10;
  } else {
    alert("Insufficient balance");
  }
  updateBalance();
}

updateBalance(); // initial call
