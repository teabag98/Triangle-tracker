
function tracker(){
  var a = document.getElementById('input-one').value;
  var b = document.getElementById('input-two').value;
  var c = document.getElementById('input-three').value;
  var side1=parseInt(a);
  var side2=parseInt(b);
  var side3=parseInt(c);
  var myArray=[side1,side2,side3]

if(side1===side2&&side2===side3&&side1===side3){
alert("the triangle is equilateral")
}
else if(side1!==side2&&side2!==side3&&side3!==side1){
alert("the triangle is Scalene")
}
else if(side1===side2&&side1!==side3||side2===side3&&side2!==side1||side1===side3&&side1!==side2&&side2+side1<side3&&side3+side2<side1&&side1+side3<side2){
   alert("the triangle is isosceles")
}
else if(side2+side1>side3||side3+side2>side1||side1+side3>side2){
alert("it is not a triangle")
}



}

tracker();
