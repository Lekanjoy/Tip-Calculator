let billAmount = document.getElementById("amount");
let custom = document.getElementById("custom");
let people = document.getElementById("people");
let tipAmount = document.getElementById("tipAmount");
let tipTotal = document.getElementById("tipTotal");
let reset = document.getElementById("reset");
const erroMsg = document.getElementById("error");
const tipBtn = document.querySelectorAll(".btn");

// Looping through all the tip% button
// and getting each click iteration
for (let i = 0; i < tipBtn.length; i++) {
  tipBtn[i].addEventListener("click", () => {
    let percentValue = tipBtn[i].textContent.slice(0, -1);
    const noOfPeople = people.value;
    // Using the created function here
    calculatePercentage(percentValue, noOfPeople);
  });
}

// Custom tip
custom.addEventListener("keyup", (e) => {
  const noOfPeople = people.value;
  let customPercentValue = e.target.value;
  calculatePercentage(customPercentValue, noOfPeople);
});
// Reset Action
reset.addEventListener("click", () => {
  billAmount.value = "";
  people.value = "";
  custom.value = "";
  tipAmount.textContent = "$ 00.00";
  tipTotal.textContent = "$ 00.00";
});

// Calculate function
function calculatePercentage(percent, quantity) {
  const userBill = billAmount.value;
  //   Checking if No of People is specified
  if (quantity <= 0) {
    erroMsg.style.display = "block";
    setTimeout(() => {
      erroMsg.style.display = "none";
    }, 3000);
    return;
  } else {
    const tip = parseFloat((percent / 100) * userBill);
    const tipPerPerson = parseFloat((tip / quantity).toFixed(2));
    const totalPerPerson = userBill / quantity + tipPerPerson;
    // console.log(typeof tipPerPerson);
    // Displaying the result
    tipAmount.textContent = `$ ` + tipPerPerson;
    tipTotal.textContent = `$ ` + totalPerPerson;
  }
}
