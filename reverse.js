const numbers = [1,2,3,4,5,6,7];

// console.log(numbers);

// numbers.reverse();
// const reverse = numbers.reverse();
// console.log(reverse);


const rev_numbers = [];
for(const num of numbers){
    // console.log(num);
    // rev_numbers.push(num);
    rev_numbers.unshift(num)
}
// console.log(rev_numbers);


// using normal formal loop
const reversed_numbers = [];
for(let i = 0;i < numbers.length;i++){
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
// console.log(reversed_numbers);

//  reverse side loop throw:
const rev_rev_numbers = [];
for(let i = numbers.length - 1;i>=0 ;i--){
    const num = numbers[i];
    rev_rev_numbers.push(num);
    
}
console.log(rev_rev_numbers) ;
