
//odd numbers array in annonymous function
let oddNumber=function(arr){
    let output=arr.filter((ele)=>ele%2!=0)
    return output;
}
console.log(oddNumber([10,11,12,13,14,15,16,17]))


//odd numbers array in IIFE function
function odd(arr){
    return arr.filter((ele)=>ele%2!=0)
}
console.log(odd([10,11,12,13,14,15,16,17]))


//odd numbers array in arrow function
let oddArray=(arr)=>{
    return arr.filter((ele)=>ele%2!=0)
}
console.log(oddArray([1,2,3,4,5,6,7,9]))




//sum of array annonymous function
var sumNum=function(arr){    
 var result=arr.reduce((acc,ele)=>acc+ele,0)
 return result;
}
console.log(sumNum([22,30,40,48,50]))

//sum of array IIFE function
function sum(arr){
return arr.reduce((acc,ele)=>acc+ele,0)
}
console.log(sum([42,50,60,58,70]));

//sum of array arrow function
let sumArary =(arr)=>{
    var res=arr.reduce((a,b)=>a+b,0)
    return res;
}
console.log(sumArary([1,2,3,4,5,6,7,8,9,10]));

//tittle caps in arrow function
var res=(str)=>{
    return(str.map(words => words[0].toUpperCase()+words.substr(1).toLowerCase()).join(" "));
}
console.log(res(["sathish","raman","raja","jhon"]));


//return all prime numbers in array arrow function

var primeNumbers=(number)=>{
        number=number.filter((ele)=>{
        for(let i=2; i<=Math.sqrt(ele); i++){
            if(ele%i === 0)return false;
        }return true;
    });
  return number;
}
console.log(primeNumbers([1,3,11,12,13,23,10,16,15,32,8,17]))

//return all palyndroms in array arrow function
var palindrom=(str)=>{
   let output=[];
   for(let i of str){
    var a=i.split("")
    var b=a.reverse();
    var c=b.join("");
    if(i===c){
        output.push(i)
    }
    return output
   }

    }
console.log(palindrom(["arun","madam","rotor"]))