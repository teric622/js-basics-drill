const num = prompt(`Put a number between 1 and 20 i.e: 2`)


const actualNum = parseInt(num);
console.log(actualNum);

if (actualNum <= 5){
    console.log(`Tiny`)
}

else if (actualNum <= 10){
console.log(`Small`)
}

else if (actualNum <= 15){
    console.log(`Medium`)
    }

else if (actualNum < 20){
        console.log(`Large`)
    }

 else if (actualNum === 20){
        console.log(`Huge`)
}
 else{
    console.log(`Risk Taker I see 😎`);
 }