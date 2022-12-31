let numb1=parseInt(prompt("Enter First Number"))
let numb2=parseInt(prompt("Enter Second Number"))

while(true)
{
    let action=parseInt(prompt("Select the Operater to perform\n 1.Add\n 2.Subtract\n 3.Multiply\n 4.Division\n 5.Modulus"))
    let result
    switch(action){
         case 1:{
            result=numb1+numb2;
            break;
         }
         case 2:{
            result=numb1-numb2;
            break;
         }
         case 3:{
            result=numb1*numb2;
            break;
         }
         case 4:{
            result=numb1/numb2;
            break;
         }
         case 5:{
            result=numb1%numb2;
            break;
         }
         default:{
            result=0;
         }
    }
    console.log(`Result is ${result}`)
    let repeat=parseInt(prompt("1.To perform some operations 2.Exit"))
    if(repeat===1){
        numb1=result
        numb2=parseInt(prompt("Enter the number"))
    }
    else
    break;
}