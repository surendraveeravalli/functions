function f1(x){
    var r=x*x+x+1;
    return r;

}

var output=f1(2);
console.log(output);

var output1=f1(4);
console.log(output1);

f1(4);




function iseven(x){
    if (x%2==0){
        return true;
    }
    return false;
}

var output = iseven (2);
console.log(output);





function arrmul(arr){
    for (index=0; index<arr.length;index++){
    arr[index]=arr[index]*2;
}
return arr;
}

var inputArr=[2,7,9];
var outputArr=arrmul(inputArr);
console.log(outputArr);






function countEvennumber(arr){
    var count=0;
    for(index=0;index<arr.length;index++){
        if(arr[index]%2==0){
            count++;
        }
        return count;
    }

}
var inputArr=[2,7,9];
var count=countEvennumber(inputArr);
console.log(count);



function f2(x,y){
    var r=(x+y+3);
    return r;
    }
    var output =f2(3,2);
    console.log(output);
    
    var output1=f2(5,6);
    console.log(output1);
    

    function iseven(x){
        if (x%2==1){
            return true;
        }
        return false;
    }
    
    var output = iseven (6);
    console.log(output);
    

    function arrdiv(arr){
        for (index=0; index<arr.length;index++){
        arr[index]=arr[index]/2;
    }
    return arr;
    }
    
    var inputArr=[20,30,90];
    var outputArr=arrdiv(inputArr);
    console.log(outputArr);
    


    function countOddNumbers(arr) {
        var count = 0;
        for (var index = 0; index < arr.length; index++) {
          if (arr[index] % 2 !== 0) {
            count++;
          }
        }
        return count;
      }
      
      var inputArr = [6, 5, 3];
      var count = countOddNumbers(inputArr);
      console.log(count);
      