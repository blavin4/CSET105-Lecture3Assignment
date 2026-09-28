const prompt = require(`prompt-sync`)();

main()
function main() {
    // console.log(findMinimum(5,6,4)); // Exercise 1
    // console.log(isEven(63)); // Exercise 2
    // console.log(nthTermSeries(4)); // Exercise 3
    console.log(nthTermFactorial(6)); // Exercise 4
    // console.log(nthTermFibonacci(7)); // Exercise 5
    // console.log(highestCommonFactor(48, 64)); // Exercise 6
    // console.log(lowestCommonMultiple(3, 4)); // Exercise 7
    // calculator(); // Exercise 8
    // console.log(multTable(); // Exercise 9
    // console.log(multTables()); // Exercise 10

    // Exercise 1
    function findMinimum(x, y, z) {
        if (x < y) {
            if (z && z < x) {
                return z;
            }
            return x
        } else {
            if (z && z < y) {
                return z
            }
            return y;
        }
    }
    // Excercise 2
    function isEven(x) {
        if(x < 0) x = Math.abs(x);
        if (x == 0) return true;
        else if (x == 1) return false;
        else return isEven(x - 2);
    }
    // Exercise 3
    function nthTermSeries(n) {
        let str = "";
        let num = 2
        for (let i = 0; i < n; i++){
           num += i * 4;
           str += `${num}, `
        }
        return str.substring(0, str.length-2);
    }
    // Exercise 4
    function nthTermFactorial(n) {
        let str = "";
        let num = 1;
        for(let i = 1; i <= n; i++){
            num *= i;
            str += `${num}, `
        }
        return str.substring(0, str.length-2);
    }
    // Exercise 5
    function nthTermFibonacci(n) {
        if (n == 1 || n == 2) return 1;
        return nthTermFibonacci(n - 1) + nthTermFibonacci(n - 2);
    }
    // Exercise 6
    function highestCommonFactor(x, y) {
        let hcf = 0;
        for (let i = 0; i <= x; i++) {
            if (Number.isInteger(x / i) && Number.isInteger(y / i)) {
                hcf = i;
            }
        }
        return hcf;
    }
    // Exercise 7
    function lowestCommonMultiple(x, y) {
        for (let i = 1; i <= x * y; i++) {
            for (let j = 1; j <= x * y; j++) {
                if (x * i == y * j) return x * i;
            }
        }
    }
    // Exercise 8
    function calculator() {
        let operator = 0;
        console.log("Please Select an option -\nPress 1 to add\nPress 2 to subtract\nPress 3 to multiply\nPress 4 to divide\nPress 5 to quit")
        operator = Number(prompt(""));
        while (Number.isNaN(operator) || operator < 1 || operator > 5) {
            operator = Number(prompt("Please select a valid option"))
        }
        if (operator == 5) return;
        let x = inputNum();
        let y = inputNum();
        if (operator == 1) console.log(add())
        else if (operator == 2) console.log(subtract())
        else if (operator == 3) console.log(multiply())
        else console.log(divide())
        calculator();

        function inputNum() {
            let num = Number(prompt("Please input a number: "));
            while (Number.isNaN(num)) num = Number(prompt("Not a number! Please input a valid number: "));
            return num;
        }
        function add() {
            return x + y;
        }
        function subtract() {
            return x - y;
        }
        function multiply() {
            return x * y;
        }
        function divide() {
            return x / y;
        }
    }
    // Exercise 9
    function multTable(x, a, b){
        let prompted = false;
        if(!x || !a || !b){
            prompted = true;
            x = Number(prompt("Please enter a number: "));
            if(isNaN(x)){
                console.log("Error: Not a number! Exiting Program.")
                return;
            }
            a = Number(prompt("Please enter a value for the lower range: "));
            if(isNaN(a)){
                console.log("Error: Not a number! Exiting Program.")
                return;
            }
            b = Number(prompt("Please enter a value for the upper range: "));
            if(isNaN(b) || b<a){
                console.log("Error: Number is either not a number or greater than the previous number! Exiting Program.")
                return;
            }
        }
        let table = ``;
        for(let i = a; i <= b; i++) table += `${x} * ${i} = ${x*i}\n`;
        if(prompted){
            console.log(table);
            multTable();
        }else return table;
        
    }
    // Exercise 10
    function multTables(x, y, a, b){
        let prompted = false;
        if(!x || !y || !a || !b){
            prompted = true;
            x = Number(prompt("Please enter a value for the lower range: "));
            if(isNaN(x)){
                console.log("Error: Not a number! Exiting Program.")
                return;
            }
            y = Number(prompt("Please enter a value for the upper range: "));
            if(isNaN(y<x)){
                console.log("Error: Number is either not a number or greater than the previous number! Exiting Program.")
                return;
            }
            a = Number(prompt("Please enter a value for the lower range: "));
            if(isNaN(a)){
                console.log("Error: Not a number! Exiting Program.")
                return;
            }
            b = Number(prompt("Please enter a value for the upper range: "));
            if(isNaN(b) || b<a){
                console.log("Error: Number is either not a number or greater than the previous number! Exiting Program.")
                return;
            }
        }
        let tables = ``;
        for(let i = x; i <= y; i++) tables += `${multTable(i,a,b)}\n`;
        if(prompted){
            console.log(tables);
            multTables();
        }else return tables;
    }
}