function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance < 400) {
    return "This one is on me!";
  } else if (distance >= 400 && distance <= 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  }
}


function ternaryCheckCity(city){
  // Write your code here!
  const struth = "NYC"
if (city === struth){
  return "Ok, sounds good."
}else if (city !== struth){
return "No go."
}
}
function switchOnCharmFromTip(tip) {
  switch (true) {
    case tip > 100:
      return "Thank you so much.";
      break
    case tip >= 50:
      return "Thank you.";
      break
    default:
      return "Bye.";
  }
}
