let answer = "";
let toBeEval = "";

function clear() {
  toBeEval = "";
  answer = 0;
  ReactDOM.render(answer, document.getElementById('display'));
}
//when a number is clicked, put its html in toBeEval
$(".num").click(function() {
//console.log($(this).html());
if ((toBeEval === "") && ($(this).html() == "0")) { //prevents leading zeros
} else {
  if (answer != "" ) {
    clear();
} toBeEval += $(this).html(); //adds number pressed to string to be evaluated
  //display toBeVal
  ReactDOM.render(toBeEval, document.getElementById('display')); 
}});

$(".operator").click(function() {
  if (toBeEval === "") { //if tobeeval is empty, can't add operator, prevents leading operator
  } else if (answer != 0 ) { //if answer string is not empty continue calculation with current answer
    toBeEval = answer + $(this).html();
    answer ="";
  }
  //if previous entry was also and operator, delete it
   else if ((toBeEval.substr(-1) == "+") || (toBeEval.substr(-1) =="-") || (toBeEval.substr(-1) == "/" )||(toBeEval.substr(-1) == "*"))  {
   toBeEval = toBeEval.slice(0, -1);
    toBeEval += $(this).html();
}
  else { //otherwise, add operator to string
    toBeEval += $(this).html();
  };  
  ReactDOM.render(toBeEval, document.getElementById('display')); 
  });

$(".decimal").click(function() {
  toBeEval += $(this).html();
     if ((/\d*\.\d*\./).test(toBeEval) || (/\.\./).test(toBeEval) ) { 
     toBeEval = toBeEval.slice(0,-1); //if decimals are repeated, delete the second entry
     };
  ReactDOM.render(toBeEval, document.getElementById('display')); 
});

//when clear is clicked, set answer to zero and render
$(".CE").click(clear);


//when equals is clicked,  answer = eval( toBeEval ). clear tobeeval
$("#equals").click(function () {
//calculate and display answer to DOM
answer = eval(toBeEval);
  ReactDOM.render(answer, document.getElementById('display'));
});