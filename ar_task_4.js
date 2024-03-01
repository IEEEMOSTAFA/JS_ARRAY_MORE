//  const statement = 'I am a hard working person';
// let reversed = statement.split('').reverse().join('');
// console.log(reversed);





//  ------------------------>>>>>>>
// function reverseWords(sentence) {
//     // Split the sentence into an array of words
//     const words = sentence.split(' ');
    
//     // Reverse the order of the words
//     const reversedWords = words.reverse();
    
//     // Join the reversed words back into a sentence
//     const reversedSentence = reversedWords.join(' ');
    
//     return reversedSentence;
// }

// // Example usage:
// const input = 'I am a hard working person';
// const reversed = reverseWords(input);
// console.log(reversed); // Output: 'person working hard a am I'
// ------------------

// function start::
function reversewords(sentence){
    const word = sentence.split(' ');
    const reverse_word = word.reverse();
    const rev_sentence = reverse_word.join(' ');

    return rev_sentence;
}

const input = 'I am a hard working person';
const reversed = reversewords(input);
console.log(reversed);