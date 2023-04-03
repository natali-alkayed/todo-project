let person = prompt("Please enter your name:");
let gender = prompt("Please enter your gender:male or femal");
if (gender !="male" && gender !="female")
{let gender = prompt("Please enter your gender:male or femal");}

let title =" ";
if (gender=="male")
{title="Mr";}
else if(gender=="female")
{title="Ms";}

let age = prompt("Please enter your age:");
if(age<=0)
   { alert("Age must be larger than 0!")
   age = prompt("Please enter your age:");}


let welcomingMessage = confirm ("Do you want to show welcoming message?");
alert("hello "+title+" "+person+"  in our website!")




     



