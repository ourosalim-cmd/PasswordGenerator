var passwordLength = prompt("choose the length of your password between 8 and 128");
var min = 8;
var max = 128;
if(passwordLength<min || passwordLength>max)
{
   alert("You must select a number between 8 and 128: Refresh the page and try again");
}
else
{
   var password = "";
   //var chartTypes = confirm("choose your character type: s, n, l, or c");
   //var chartType = ["s", "n", "l", "c"];
   var s = "";
   var c = "";
   var n = "";
   var l = "";
   //var specialC;
   var specialS;
   //var numberC;
   var numberS;
   //var lowerCaseC;
   var lowerCaseS;
   //var capitalC;
   var capitalS;
   //for(i= 0; i<chartType.length; i++){}
      var specialC= confirm("Do you want your password to contain a special character?");
      var numberC = confirm("Do you want your password to contain number character?");
      var lowerCaseC =confirm("Do you want your password to contain lower case character?");
      var capitalC = confirm("Do you want your password to contain capital character?");
      var chartTypeCount = 0;
      var scale = 2;
      console.log(specialC);
      console.log(numberC);
      console.log(lowerCaseC);
      console.log(capitalC);

      if(specialC === false  && numberC === false && lowerCaseC === false && capitalC === false)
   {
      alert("You must select at least one character type");
      
   }
   if (capitalC == true)
   {
      if ( specialC == false  && numberC == false && lowerCaseC == false)
      {
         capitalS = passwordLength;
      }
      else
      {
         capitalS = scale;
         //passwordLength = passwordLength-capitalS;
         console.log("Password lenght after captal = " + passwordLength);
         chartTypeCount+= scale;
         console.log("Character count = " + chartTypeCount);
      }   
         capitalC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      c = generate(capitalC, capitalS);
      console.log(" c is = " + c);
   }
         //alert ("after capital " + passwordLength);
      
      if(specialC===true)
      {
         if (capitalC === false  && numberC === false && lowerCaseC === false)
         {
            specialS = passwordLength
         }
         else if (numberC == false && lowerCaseC == false)
         //(capitalC === false  && (numberC === true || lowerCaseC === true))
         {
            //specialS = scale; 
            //console.log("Password length before special = " + passwordLength);
         // console.log("Character count before special = " + chartTypeCount);
            specialS = passwordLength - chartTypeCount;
            //console.log("Size of special = " + specialS);
            //passwordLength = passwordLength-specialS;
            //chartTypeCount = chartTypeCount + scale;
         }

         else //if (capitalC === true  && (numberC === false && lowerCaseC === false))
         {
            specialS = scale; 
            //specialS = passwordLength - chartTypeCount;
            chartTypeCount = chartTypeCount + scale;
            //specialS = passwordLength - chartTypeCount;
         }
         //passwordLength = passwordLength-specialS;
         

         specialC = "\\\"\!\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
         s = generate(specialC, specialS);
         console.log("s is = " + s);
         //alert ("after special " + passwordLength);
      }
      
      if (numberC == true)
      {
         if (capitalC === false  && specialC === false && lowerCaseC === false)
         {
            numberS = passwordLength;
         }
         else if (lowerCaseC === false)//  && (capitalC === true || specialC === true))
         {   
            numberS = passwordLength - chartTypeCount;
         }
         else
         {
            numberS = scale;
            chartTypeCount = chartTypeCount + scale;
         }
         
         //passwordLength = passwordLength-numberS;
      // passwordLength = passwordLength-3;
         numberC = "0123456789";
         n = generate(numberC, numberS);
         console.log("n is = " + n);
         //console.log("numbeC has " + numberC.length);
         //alert ("after number " + passwordLength);
      }
      
      if (lowerCaseC == true)
      {
         if (capitalC === false  && specialC === false && numberC === false)
         {
            lowerCaseS = passwordLength;
         }
         else
         {
            lowerCaseS = passwordLength-chartTypeCount;
         }
         //passwordLength= passwordLength - lowerCaseS;
         lowerCaseC = "abcdefghijklmnopqrstuvwxyz";
         l = generate(lowerCaseC, lowerCaseS);
         console.log("l is = " + l);
      }
      
      alert("Your pasword is " + c+l+n+s);
      
   var str = "";

   function generate (myString, aNumber)
   {
      str = "";
      //Math.floor(Math.random() * myString.length);
      for (i = 0; i<aNumber; i++)
      {
         var rNumber = Math.floor(Math.random() * myString.length);
         str = str + myString[rNumber];

      }
      return str;
   }


   /*function chartSize()
   {
      if (capitalC == true)
      {
         if ( specialC === false  && numberC === false && lowerCaseC === false)
         {
            capitalS = passwordLength;
         }
         else if ( (numberC === false && lowerCaseC === false) || 
                  (specialC === false  && numberC === false) ||
                  (specialC === false  && lowerCaseC === false)
                  )
         {
            capitalS = passwordLength/2
         }
         else 
         {
            capitalS = 2;
         }
      }

   }*/
   //console.log("n is = " + n);
}

