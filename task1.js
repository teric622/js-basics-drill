
const name = prompt("what is your name?");
const nameU = name.toUpperCase();
console.log(nameU);

const proffesion = prompt(`Hey ${nameU} what is your proffesion?`)
const proffesionU = proffesion.toUpperCase();
console.log(proffesionU)

const like = prompt(`Amazing! ${nameU} what do you like most about being a ${proffesionU}?`)
const likeL = like.toLowerCase();
console.log(likeL)

const future = prompt(`That is so cool! ${name} were do you see yourself in 5 years regarding your proffesion as a ${proffesion}?`)
const futureL = future.toLowerCase();
console.log(futureL)


const message = `<h2>Hello, It is a honor meeting with you, my name is ${name}.
 I am a ${proffesion} and strive to be a member of your hard working and dedicated team. 
 What I love about being a ${proffesion} is ${like} and see myself within 5 years ${future}</h2>`;

 let messageU = message.toUpperCase();

 console.log(messageU)
document.querySelector('main').innerHTML = messageU;