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

      if (i % 1 === 0) {
       numberArr.push("BeepBoop");
      } else if (i % 3 === 0) {
       numberArr.push("I'm sorry, Fellow I'm afraid I can't do that");
     } else if (i %  === 0) {
       numberArr.push("beep");
      } else
       numberArr.push(i)
    }
  }

  return numberArr;
}
