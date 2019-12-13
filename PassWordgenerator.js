var passwordLength = prompt("choose the length of your password between 8 and 128");
var password = "";
//var chartTypes = confirm("choose your character type: s, n, l, or c");
//var chartType = ["s", "n", "l", "c"];
var s = "";
var c = "";
var n = "";
var l = "";
var specialC;
var specialS;
var numberC;
var numberS;
var lowerCaseC;
var lowerCaseS;
var capitalC;
var capitalS;
//for(i= 0; i<chartType.length; i++){}
   specialC= confirm("Do you want your password to contain a special character?");
   numberC = confirm("Do you want your password to contain number character?");
   lowerCaseC =confirm("Do you want your password to contain lower case character?");
   capitalC = confirm("Do you want your password to contain capital character?");

   if (capitalC == true)
   {
      capitalS = 1;
      passwordLength = passwordLength-1;
      capitalC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     c = generate(capitalC, capitalS);
     console.log(" c is = " + c);
      //alert ("after capital " + passwordLength);
   }

   
   if(specialC===true)
   {
      specialS= 1; 
      passwordLength = passwordLength-1;
      specialC = "\\\"\!\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
      //s = generate(specialC, specialS);
      console.log("s is = " + generate(specialC, specialS));
      //alert ("after special " + passwordLength);
   }
   
   if (numberC == true)
   {
      numberS= 3;
      passwordLength = passwordLength-3;
      numberC = "0123456789";
      n = generate(numberC, numberS);
      //console.log("n is = " + n);
      console.log("numbeC has " + numberC.length);
      //alert ("after number " + passwordLength);
   }
   
   if (lowerCaseC == true)
   {
      lowerCaseS = passwordLength;
      passwordLength= passwordLength - lowerCaseS;
      lowerCaseC = "abcdefghijklmnopqrstuvwxyz";
      l = generate(lowerCaseC, lowerCaseS);
      //console.log("l is = " + l);
   }
   
   
   
var str = "";

function generate (myString, aNumber)
{
   
   //Math.floor(Math.random() * myString.length);
   for (i = 0; i<aNumber; i++)
   {
      var rNumber = Math.floor(Math.random() * myString.length) -1;
      str = str + myString[rNumber];
      console.log( " my rNumber = " + rNumber);
   }
   return;// str;
}

//alert("Your password is " + c+l+n+s);

console.log("n is = " + n);

