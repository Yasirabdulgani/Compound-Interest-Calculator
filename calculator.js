function calculateYears(final, principal, rate) {
  return Math.log(final / principal) / Math.log(1 + rate)
}
window.onload = function() {
  let calculate = document.getElementById("calculate");
  calculate.onclick = function() {
    let selectedNumberRate = 0;
    let principal = document.getElementById("principal").value;
    let final = document.getElementById("final").value;
    let rate = document.getElementById("rate").value / 100;
    let years = calculateYears(final, principal, rate);
    let roundedYears = Math.round(years);
    let months = years * 12;
    let roundedMonths = Math.round(months);
    let answer = document.getElementById("answer");
    answer.innerHTML = "You will need to save for " + years +
    " years, which is " + months +
    " months to reach your goal!";
    let compare = document.getElementById("compare");
    compare.onclick = function() {

      // let principal = document.getElementById("principal").value;
      // let final = document.getElementById("final").value;
      // let rate = document.getElementById("rate").value/100;
      let firstRate = 5;
      let secondRate = 10;
      let thirdRate = 15;
      let fourthRate = 20;
      console.log(compare.value);
      let numberSelectedRate = document.getElementById("compare").value;
      if (numberSelectedRate === "5%") {
        selectedNumberRate = firstRate;
        console.log("5%");
      } else if (numberSelectedRate === "10%") {
        selectedNumberRate = secondRate;
      } else if (numberSelectedRate === "15%") {
        selectedNumberRate = thirdRate;
      } else if (numberSelectedRate === "20%") {
        selectedNumberRate = fourthRate;
        console.log("20%");
      }
      let changingPercent = selectedNumberRate / 100;
      let yearsSelectedNumberRate = calculateYears(final, principal, selectedNumberRate);
      let output = document.getElementById("output");
      output.innerHTML = "If you used " + selectedNumberRate +
      " percent interest rate, you will need to save for " + years + " years";
    }
  }
  let reset = document.getElementById("reset");
  reset.onclick = function() {
    document.getElementById("principal").value = "";
    document.getElementById("final").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("output").innerHTML = "";
  }
}
