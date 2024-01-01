let EnhancedSum = (x, y ,...args)=>{
    sm = x+y;
    if (args.length !=0){
        for (let i = 0; i < args.length; i++) {
            sm += args[i];
        }
    }
    return sm;
}
 console.log(EnhancedSum(2,3));
 console.log(EnhancedSum(2,3,5,6,7,8,9));


 let arr1 = ["one" , "two"] ;
 let arr2 = [... arr2 , "three" , "four", "five", "six", ] ;
 let arr3 = [1,2,3,4,5,6,7,8,9]
console.log(arr1)
console.log(arr2)

console.log(EnhancedSum(...arr3))
console.log(...arr3)
console.log(EnhancedSum(1,2,3,4,5,6,7,8,9))