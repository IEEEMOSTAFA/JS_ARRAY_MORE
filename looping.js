/*
Looping Technique
*1.for loop
2.while loop
3.do while   ----->ignore
4.for of -----> array loop korar junno use kori
5.for in ------> object loop korar junno use kori

*/

const friends = ['Elon','Bill','Mark','Warren'];
for(const friend of friends){
    // console.log(friend);
}
for(let i = 0;i < friends.length;i++){
    console.log(i);
    // console.log(friends[i]);
}

const numbers = [4,23,456,421,4522,54434,21,45,6]
for(let i = 0;i< numbers.length;i++){
    // console.log(numbers[i]);
}


let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}

// ---------------------> while loop
let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}

