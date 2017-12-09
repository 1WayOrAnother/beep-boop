//Back end /Buisness logic
function beepBoot(number) {
  $("#list").empty(number); //empties the div each time

var numberArr =[];
  for (var i = 1; i <= number; i += 1) {
    var flag= false;
    for (j=0; j< number.toString().length; ++j){
      if (number.toString().charAt(j)== '0')
        flag = true;
    }
    if(flag==false){

      if (i % 15 === 0) {
       numberArr.push("BeepBoop");
      } else if (i % 3 === 0) {
       numberArr.push("ping");
      } else if (i % 5 === 0) {
       numberArr.push("pong");
      } else
       numberArr.push(i)
    }
  }

  return numberArr;
}
