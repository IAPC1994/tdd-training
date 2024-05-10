/*
Write a function that you can pass 2 parameters:
- Shows "fizz" if it is a multiple of 3
- Shows "buzz" if it is a multiple of 5
- Shows "fizzbuzz" if it is a multiple of 5 and 3
- Shows the number if it is not a multiple of 5 and 3
*/

export const fizzbuzz = (number) => {
    if( typeof number !== 'number') throw new Error('parameter provided is not a number');
    if( Number.isNaN(number) ) throw new Error('parameter provided must be a number');

    // if( number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
    // if( number % 3 === 0 ) return 'fizz';
    // if( number % 5 === 0 ) return 'buzz';
    
    // Refactor
    const multiplies = { 3: 'fizz', 5: 'buzz' }; // Now, you can add more multiplies and it will still working
    let output = '';

    Object
        .entries(multiplies)
        .forEach(([multiplier, word]) => {
            if( number % multiplier === 0 ) output += word;
        })

    return output === '' ? number : output;
}