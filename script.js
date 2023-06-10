function compute() {
    let p = document.getElementById("principal");
    let principal = parseInt(p.value);
    let rate = parseFloat(document.getElementById("rate").value);
    let num_years = parseInt(document.getElementById("years").value);
    let year = new Date().getFullYear();
    let years = year + num_years;
    let interest = (principal * num_years * rate) / 100;
    let amount = principal + interest;
    let result = document.getElementById("result");
    if (principal <= 0) {
      alert("Enter a positive number");
      p.focus();
    } else {
      result.innerHTML = `If you deposit $<mark>${principal}</mark>, at an intrest rate of <mark>${rate}</mark>% You will receive an amount of $<mark>${amount}</mark>, in the year <mark>${years}</mark>`;
    }
  }
  
  function updateRate() {
    let rateval = document.getElementById("rate").value;
    let ratevalSpan = document.getElementById("rate_val");
    ratevalSpan.innerHTML = rateval;
  }