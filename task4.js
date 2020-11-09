const name = prompt(`Name of employee`);

const rate = prompt(`Hey ${name}, what is your hourly rate $US ?`);
const actualRate = parseInt(rate);


const hours = prompt(` Hours Worked`);
const actualhours = parseInt(hours);

const regPay = actualhours * actualRate;
// Need to make sure that numbers are not red as strings, 
// rate needs to multiply by 1.5 for overtime
const overTimePay = rate * 1.5;
console.log (overTimePay)
const actualTimePay = parseInt(overTimePay);
// need to subtract total hours by 40 to get total of overtime hours
// overtime hours and pay multiply to get sum of total extra payment from overtime
const overTimeHours = actualhours - 40;
const overTimeSum = overTimeHours * overTimePay;
console.log(overTimeSum);

// if else statments were complicating this, just need a variable for the sole 40< hours paysum
const regPayForOver = 40 * actualRate;

// multiply regpay by the overtime sum to get total if overtime is worked
const finalPayWithOverTime = regPayForOver + overTimeSum;


if(actualhours <= 40){
console.log (`${name} worked a total of ${actualhours} and will be recieving a payment of $${regPay}`)
}

else if (actualhours > 40){
  console.log(`${name} worked a total of ${actualhours} hours and will be receiving a payment of $${finalPayWithOverTime}`)
}