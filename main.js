 // function declaration
 
 fDeclation (); // hohlagan  joyimzda chaqirib ishlatishimz mumkin

 function fDeclation () {
    console.log("Hello function declation");
 }
  fDeclation ();
  fDeclation ();
  fDeclation ();
 
// function expression
    
 // bunda tepada chaqirib bolmaydi  fExpression ();
 const fExpression = function () {
    console.log("Hello function expression");
 }
  fExpression ();
  fExpression ();
  fExpression ();

// arrow function
 // buni ham tepada chaqirib bolmaydi
const fArrow = () => {
    console.log("Hello Arrow function ");
}
fArrow();
fArrow();
fArrow();


const fExpression1 = function (name, day) {
    console.log(` Hayrli ${day} ${name}`);
}

fExpression1('Mirjalol', 'tong');



const fExpression2 = function (name, day= 'kun') {
    console.log(` Hayrli ${day} ${name}`);
}

fExpression2('Mirjalol', 'kech');