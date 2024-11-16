//write a function to check whether input num is even or odd
function number(x){
    if(x%2==0){
        console.log("It is an Even Number")
    }
    else{
        console.log("It is an Odd Number")
    }
}
number(12);
number(11);

//write a function to check the whether input string is palindrome or not.
function demo() {
   
    var str = "racecar"; 
    var str2 = "";
    for (
      i = str.length - 1;
      i >= 0;
      i-- 
    ) {
      str2 += str[i]; 
    }
    if (str == str2) {
    
      console.log(`${str2} is palindrome`);
    } else {
      console.log(`${str2} is not palindrome`);
    }
  }
  demo(); 
  
  //write a function to check largest num among three numbers.
  
  function num(a,b,c){
    if(a>b && a>c){
        console.log(`a value ${a} is greater`)
    }if(b>a && b>c){
        console.log(`B value ${b} is  greater`)
    }
    if(c>a && c>b){
        console.log(`C  value ${c} is greater`)
    }
}
num(2,3,5)

