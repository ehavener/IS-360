var form = document.payment;
form.addEventListener('submit', calculateCompoundInterest, false);

function calculateCompoundInterest(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;

  const initialLoanAmount = document.payment.initialLoanAmount.value * 1;
  const numberOfPeriods = document.payment.numberOfPeriods.value;
  const annualInterestRate = document.payment.annualInterestRate.value;

  const numberOfMonthlyPeriods = numberOfPeriods * 12;
  const monthlyInterestRate = annualInterestRate / 12;

  const ratePerPeriod = annualInterestRate / 100 / 12;

  let payment =
    ratePerPeriod *
    initialLoanAmount /
    (1 - Math.pow(1 + ratePerPeriod, numberOfMonthlyPeriods * -1));

  console.log('ratePerPeriod', ratePerPeriod);
  console.log('initialLoanAmount', initialLoanAmount);
  console.log('monthlyInterestRate', monthlyInterestRate);
  console.log('numberOfMonthlyPeriods', numberOfMonthlyPeriods);
  console.log('payment', payment);

  payment = payment.toFixed(2);

  document.getElementById('output').value = +payment;
  return false;
}

function isNumberKey(e, value, step) {
  console.log(e, value, step);
  var charCode = e.which ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46)
    return false;
  return true;
}

$('input').on('keypress', function(e) {
  if (!isNumberKey(e)) {
    return false;
  } else return true;
});
