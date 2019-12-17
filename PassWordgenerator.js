var min = 8;
var max = 128;
var specialC = document.querySelector("#customCheck1");
var numberC = document.querySelector("#customCheck2");
var lowerCaseC = document.querySelector("#customCheck3");
var capitalC = document.querySelector("#customCheck4");
var chartTypeCount = 0; //Keeping account of character type being used
var scale = 2;//The least number each charater can have
var password = "";
var special = "";
var capital = "";
var number = "";
var lowerCase = "";
var specialS;
var numberS;
var lowerCaseS;
var capitalS;
//Slider values and display starts here
//This function generates  password substrings randomly per charater type
var myPassWordPrint = document.querySelector("#passWord");
var slider = document.querySelector("#customRange2");
var output = document.querySelector("#sliderValue");
var generatePass = document.querySelector("#myButton");
output.innerHTML = slider.value;
var passwordLength = slider.value;
slider.oninput = function() 
{
   output.innerHTML = this.value;
   passwordLength = this.value;
}
//Slider values and display ends here
specialC.oninput = function()
{
   specialC.checked = true; 
   //console.log(" special = " + specialC); 
   return specialC;
}
//Generate password button and functions
generatePass.onclick = function()
{
   if (passwordLength<min || passwordLength>max)
   {
      alert("You must select a number between 8 and 128: Refresh the page and try again");
   }
   else if (specialC.checked == false  && numberC.checked == false && 
      lowerCaseC.checked == false && capitalC.checked == false)
      {
         alert("You must select at least one character type");  
      }
   else
   {     
      if (capitalC.checked === true)
      {
         if ( specialC.checked === false  && numberC.checked === false && lowerCaseC.checked === false)
         {
            capitalS = passwordLength;
         }
         else
         {
            capitalS = scale;
            chartTypeCount+= scale;
         }   
            capitalC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         capital = generate(capitalC, capitalS);
      }  
         if(specialC.checked===true)
         {
            if (capitalC.checked === false  && numberC.checked === false && lowerCaseC.checked === false)
            {
               specialS = passwordLength
            }
            else if (numberC.checked == false && lowerCaseC.checked == false)
            {
               specialS = passwordLength - chartTypeCount;
            }
            else 
            {
               specialS = scale; 
               chartTypeCount = chartTypeCount + scale;
            }
            specialC = "\\\"\!\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~";
            special = generate(specialC, specialS);
         }       
         if (numberC.checked == true)
         {
            if (capitalC.checked === false  && specialC.checked === false && lowerCaseC.checked === false)
            {
               numberS = passwordLength;
            }
            else if (lowerCaseC.checked === false)
            {   
               numberS = passwordLength - chartTypeCount;
            }
            else
            {
               numberS = scale;
               chartTypeCount = chartTypeCount + scale;
            }
            numberC = "0123456789";
            number = generate(numberC, numberS);
         }
         
         if (lowerCaseC.checked == true)
         {
            if (capitalC.checked === false  && specialC.checked === false && numberC.checked === false)
            {
               lowerCaseS = passwordLength;
            }
            else
            {
               lowerCaseS = passwordLength-chartTypeCount;
            }
            lowerCaseC = "abcdefghijklmnopqrstuvwxyz";
            lowerCase = generate(lowerCaseC, lowerCaseS);
         }
         myPassWordPrint.innerHTML = capital+lowerCase+number+special;
         //alert("Your pasword is " + capital+lowerCase+number+special);
         var str = "";
         function generate (myString, aNumber)
         {
            str = "";
            for (i = 0; i<aNumber; i++)
            {
               var rNumber = Math.floor(Math.random() * myString.length);
               str = str + myString[rNumber];
            }
         return str;
      }   
   }
}
//Copy to clipboar function
var textArea = document.querySelector("#passWord");
textArea = myPassWordPrint;
var copyPassWord = document.querySelector("#copyPass");
copyPassWord.onclick = function()
{
   textArea = myPassWordPrint;
   document.execCommand("copy");
   alert("You copied: " + myPassWordPrint.textContent);
}
