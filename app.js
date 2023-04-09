/*let person = prompt("Please enter your name:");
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

*/
///////////////////////////////////////////////
function Questions (question)
{
   let answer = prompt(question);
   return answer;
}
///////////////////////////////////////////////
let answersArr =[];
function putInArr (answer)
{ 
    if(answer=="yes")
    answersArr.push("yes");
 
    else if(answer=="no")
    answersArr.push("no");
 
    else
    answersArr.push("invalid"); 
}
///////////////////////////////////////////////
function printArr(answersArr)
{
  for (let i=0;i<answersArr.length;i++)
  {
   console.log(answersArr[i]);
  }
}
///////////////////////////////////////////////
let answer1=Questions ("Do you need help?[yes/no]");
putInArr(answer1);
let answer2=Questions ("Do you like our websit?[yes/no]");
putInArr(answer2);
let answer3=Questions ("is our websit usefull?[yes/no]");
putInArr(answer3);

printArr(answersArr);
///////////////////////////////////////////////











     



