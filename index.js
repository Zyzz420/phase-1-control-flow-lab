// Write your code here!
let message;

function scuberGreetingForFeet(distance){
  if (distance<=400){
  message="This one is on me!"
} else if (distance>2000 && distance<2500){
  message="I will gladly take your thirty bucks."
} else if(distance>2500){
  message="No can do."
}return message;
}
scuberGreetingForFeet(199);


function ternaryCheckCity(city){
if(city==='NYC'){
message='Ok,sounds good.'
}
 else {
  message='No,go.'

}return message;
}
function ternaryCheckCity(city){
  if(city ==='NYC') {
    return 'Ok, sounds good.'
  }else {
    return 'No go.'
  }
}


function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."
      break;
  }
}