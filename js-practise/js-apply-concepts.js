
// function Factorial(x) {
//     let fact = 1;
//     let i = x;
//     while(i>=1){
//         fact *= i;
//         i--;
//     }
//     console.log(fact);
// }
// Factorial(3);

//Factorial using Recursive Function

// function FactorialRecursive(x){
//     if(n == 0){
//         return 1;
//     }else{
//         return n*FactorialRecursive(n-1);
//     }
// }
// let x = FactorialRecursive(3);
// console.log(x)

//fibonacci sequence

function Fibonacci (fib) {
    let a,b;
    a = 0;
    b = 1;
    if(a == 0 && b == 1){
        return 0,1;
    }else{
        let x,i;
        x = fib;
        for(i=2;i<=x;i++){
            let c = a + b;
            return c+',';
            a=b;
            b=c;
        }
    }
}
let fibo = Fibonacci(10);
console.log(fibo);