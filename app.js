let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,12,13,18,99,101]; 

function countEvenandOdds (numbers ){
  let evenNumbers = numbers.filter(n => {
    return n % 2 === 0;
});

let oddNumbers = numbers.filter(n => {
    return n % 2 !== 0; 
});

console.log("count of even numbers: " + evenNumbers.length); 
console.log("count of odd numbers: " + oddNumbers.length); 
}
countEvenandOdds(numbers);