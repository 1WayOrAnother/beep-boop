// backend
function beepBoop(number) {
  var numberArr =[];
  for (var i = number; i >= 0; i -= 1) {
      if (i  === 0) {
      numberArr.push("beep");
      //console.log(i + "beep")
    } else if (i === 1) {
      numberArr.push("boop");
      //console.log(i + "boop")
    } else if (i % 3 === 0) {
      //console.log(i + "I'm sorry Fellow can't do it.")
      numberArr.push("I'm sorry Fellow can't do it.");
    } else {
      //console.log(i)
      numberArr.push(i)
    }
  }
  return numberArr;
};//End of 'beepBoop' function.

function buildList(numberArr) {
  var strings = "";
  for (var ii = 0; ii < numberArr.length; ii++) {
    strings += "<li>"+numberArr[ii]+"</li>";
  }
  return strings;
}

//  front end logic
function resetFields() {
    $("input#number").val("");
}
//var Input = Input +
//  $("#list").empty(number);
$(document).ready(function() {
  $("form#generator").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val();
    $("#list").append(buildList(beepBoop(input)));
    $("#result").show();
    resetFields();
  });
  $("#reverse").click(function(event) {
    event.preventDefault();
    var input = $("#number").val();
    $("#list").append(buildList(beepBoop(input).reverse()));
    $("#result").show();
    resetFields();
  });
});
