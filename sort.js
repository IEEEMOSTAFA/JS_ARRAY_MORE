const persons = ['rakib','nokib','sakib','akib','dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);


// sort  ------>
// const numbers = [4,7,2,8,3,6];
// Ascending  -----------> smaller to larger : [2,3,4,6,7,8]
// Descendig  -----------> larger to smaller : [8,7,6,4,3,2,1]
const numbers = [4,7,12,8,43,6,1];
// const numbers_asc = numbers.sort() // not working properly
// const numbers_asc = numbers.sort(function(a,b) {return a - b})
// console.log(numbers_asc);


const numbers_dsc = numbers.sort(function(a,b) {return b - a})
console.log(numbers_dsc);   