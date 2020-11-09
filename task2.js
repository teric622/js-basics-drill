
const nameC = prompt(`What is your name?`);
const chose = prompt (`Hey ${nameC}! pick a color: Red, Green, or Yellow`);
const choseU = chose.toUpperCase();
console.log(choseU);

const green = `Hey ${nameC} you know what green means, GO!`;
const yellow = `Hey ${nameC} you know what yellow means, SLOW DOWN!`
const red = `Hey ${nameC} you know what red means, STOP!`

if(choseU === 'GREEN'){
console.log(green);
}

else if (choseU === 'YELLOW'){
    console.log(yellow);
}

else if (choseU === 'RED'){
    console.log(red);
}

else{
    console.log(`bummer, you did not choose a valid answer 😫`)
}