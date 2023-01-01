const countries=[,"India",,"USA","UK","Canada","Austraila","Japan",]

let myObj={
    name:"Honda",
    model:"CRV",
    color:"Black",
    winNumber:123456789
}


function iteration(){
    console.log("Iterating Array using for in")
    for(let i in countries)
   {
     console.log(countries[i])
   }


   console.log("\nIterating Array using for of")
   for(let country of countries){
    console.log(country)
   }

   console.log("\n Iterating Object using for in")
   for(let i in myObj){
    console.log(i+" "+myObj[i])
   }

}

function diffLoops(){

    var result=0;
    for(let i=0;i<50;i++){
        result+=i;
    }
    console.log(`Result is ${result}`)
    var result=1;
    let i=1;
    while(i<10){
        result*=i;
        i++;
    }
    console.log(`Result is ${result}`)
    i=0;
    do{
        i+=2;
    }while(i<11)
    console.log(i)

    const year=2022
    if(year%4==0)
    console.log("2022 is a Leap year")
    else
    console.log("2022 is not a leap year")

    const weekNumber =4
    switch(weekNumber){
        case 1:{
            console.log("Monday")
            break;
        }
        case 2:{
            console.log("Tuesday")
            break;
        }
        case 3:{
            console.log("Wednesday")
            break;
        }
        case 4:{
            console.log("Thrusday")
            break;
        }
        case 5:{
            console.log("Friday")
            break;
        }
        case 6:{
            console.log("Saturday")
            break;
        }
        case 7:{
            console.log("Sunday")
            break;
        }
        default:
            console.log("Not a week number")
    }
}

iteration()
diffLoops()