// var amount = parseInt(document.getElementById("amount").value);
// var time = parseInt(document.getElementById("time").value);
// var intrest = document.getElementById("return").value;
// var result = document.getElementById("calculate").value;
// var total = document.getElementById("totalmoney");
// var compound = document.getElementById("compoundedmoney");

// document.getElementById("button").addEventListener("click", function () {
//   // Grabs the values from input fields
//   var p = document.getElementById("p").value;
//   (n = 12), (r = roi / n / 100), (result = 0), (instalments = n * t);
//   var t = document.getElementById("t").value;
//   var roi = document.getElementById("roi").value;
//   // selects the result element

//   var result = document.getElementById("result");
//   // Returns the result of the percentage portion amount
//   return (result.textContent = p * Math.pow(1 + r / n, n * t));
// // });
// function calculate() {
//   var amount = parseInt(document.getElementById("amount").value);
//   (n = 12), (r = intrest / n / 100), (compound = 0), (instalments = n * time);
//   var intrest = document.getElementById("return").value;
//   var time = parseInt(document.getElementById("time").value);
//   var compound = document.getElementById("calculate").value;

//   !isNaN(compound);amount * Math.pow(1 + r / n, n * time);
//   console.log(compound)

// }

// var monthlyRate = parseInt(intrest) / 12 / 100;
// console.log(monthlyRate)
// var months = Number.time * 12;

// returnRate;
// years;
// amount;

// function calculate() {
//   if (amount.value === "") alert("Entern your no");
//   else total.innerText = amount * time;
// }

// function calculate() {
//   let returnRate = parseInt(intrest);
//   let years = parseInt(time);
//   let amount = parseInt(amounta);
//   if (amount.value === "") alert("Entern your no");
//   else
//     wealthGained.innertext = Math.round(
//       ((Math.pow(1 + (Math.pow(1 + returnRate / 100, 1 / 12) - 1), years * 12) -
//         1) /
//         (Math.pow(1 + returnRate / 100, 1 / 12) - 1)) *
//         amount
//     );
// }

// document.getElementById("compoundedmoney").innerHTML =
//   wealthGained === "NaN" ? "0" : wealthGained;

// function calculate() {
//     if (amount.value === "") alert("Entern your no");
//     else compound.innerHtml =
//     (parseInt(amount) *
//       (Math.pow(1 + (parseInt(intrest)/12/100),(parseInt(time)*12) ) - 1)) /
//       (parseInt(intrest)/12/100);

//   }

// var investment = 800; //principal amount
// var annualRate = 2;
// var monthlyRate = annualRate / 12 / 100;  //Rate of interest
// var years = 30;
// var months = years * 12;  //Time period
// var futureValue = 0; //Final Value

// futureValue = investment * (Math.pow(1 + monthlyRate, months) - 1) /
// monthlyRate;

// SIP is nothing but just Compound interest amount on Principal amount.

// if(checkedValue){
//   wealthGained = Math.round((Math.pow((1 + (Math.pow((1 + returnRate / 100), (1 / 12)) - 1)), (years * 12)) - 1) / (Math.pow((1+ returnRate / 100), (1 / 12)) - 1) * amount);
//   total = (amount*12)*years;
// }else{
//   total = amount;
//   wealthGained = Math.round(Math.pow((1 + returnRate / 100), years) * amount);
// }

// var amount = document.getElementById("amount").value;
// var time = document.getElementById("time").value;
// var intrest = document.getElementById("return").value;
// var result = document.getElementById("calculate").value;
// var total = document.getElementById("totalmoney");
// var compound = document.getElementById("compoundedmoney");
// // var simple = parseInt(amount) * parseInt(time) * 12;
// var simple = eval(amount * time * 12);

// function calculate() {
//   if (amount === "") alert("Enter all values correctly");
//   else {
//     total.innerHTML = simple;
//   }
// }

// var slider1 = document.getElementById("amount");
// var slider2 = document.getElementById("interest");
// var slider3 = document.getElementById("year");
// var output1 = document.getElementById("demo1");
// var output2 = document.getElementById("demo2");
// var output3 = document.getElementById("demo3");

// output1.innerHTML = slider1.value;
// output2.innerHTML = slider2.value;
// output3.innerHTML = slider3.value;

// slider1.oninput = function () {
//   output1.innerHTML = this.value;
//   var out1 = output1;
// };
// slider2.oninput = function () {
//   output2.innerHTML = this.value;
//   var out2 = output2;
// };
// slider3.oninput = function () {
//   output3.innerHTML = this.value;
//   var out3 = output3;
// };
// document.getElementById("loan-form").addEventListener("submit", computeResults);

// function computeResults(e) {
//   const UIamount = slider1.value;
//   const UIinterest = slider2.value;
//   const UIyears = slider3.value;

//   const principal = parseFloat(UIamount);
//   const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
//   const calculatedPayments = parseFloat(UIyears) * 12;

//   //Compute monthly Payment

//   const x = Math.pow(1 + CalculateInterest, calculatedPayments);
//   const monthly = (principal * x * CalculateInterest) / (x - 1);
//   const monthlyPayment = monthly.toFixed(2);

//   //Compute Interest

//   const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

//   //Compute Total Payment

//   const totalPayment = (monthly * calculatedPayments).toFixed(2);

//   //Show results

//   document.getElementById("monthlyPayment").innerHTML = "₹ " + monthlyPayment;

//   document.getElementById("totalInterest").innerHTML = "₹ " + totalInterest;

//   document.getElementById("totalPayment").innerHTML = "₹ " + totalPayment;
//   e.preventDefault();
// }

// var amount = document.getElementById("amount");
// var time = document.getElementById("time");
// var intrest = document.getElementById("return");

// function calculate() {
//   let UIamount = amount.value;
//   let UItime = time.vale;
//   let UIreturn = intrest.vale;

//   const principal = parseFloat(UIamount);
//   const CalculateInterest = parseFloat(UIreturn) / 100 / 12;
//   const calculatedPayments = parseFloat(UItime) * 12;

//   const money = toString((principal * calculatedPayments).toFixed(3));
//   console.log(typeOf.money)
//   document.getElementById("totalmoney").innerText = "₹ " + money;
// }

function palindrome(str) {
  // your code here!
  let len = str.length;
  let toarr = str.split("");
  let revstr = toarr.reverse();
  let revname = revstr.join("");

  let main = str.toLowerCase();
  let main2 = revname.toLowerCase();

  if (main2 == main) {
    return true;
  } else {
    return false;
  }

  //code end. don't edit anything below
}

console.log(palindrome("Naman"));
