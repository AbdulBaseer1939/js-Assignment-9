// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare

// var userInput = +prompt("Please enter a number");

// for (var i = 1; i <= 10; i++) {
//   alert(`${userInput} * ${i} = ${userInput * i}`);
// }

// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements ka sum find kar k print kare

// const numbers = [];

// for (let i = 0; i < 5; i++) {
//     const userInput = parseFloat(prompt(`Enter number ${i + 1}:`));
//     numbers.push(userInput);
// }

// let sum = 0;
// for (const num of numbers) {
//     sum += num;
// }

// alert(`Sum of the numbers: ${sum}`);

// ARRAY KA SUB SE BARA NUMBER PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare

const number5s = [];

for (let i = 0; i < 5; i++) {
    const userInput = parseFloat(prompt(`Enter number ${i + 1}:`));
    number5s.push(userInput);
}

let baraNumber = number5s[0];
for (const num of number5s) {
    if (num > baraNumber) {
        baraNumber = num;
    }
}

alert(`The largest number is: ${baraNumber}`);

// 4. USER SE STRING LE AND USKO ULTA PRINT KARE
// DESCRIPTION:
// 1. user se koi b string input le
// 2. usko reverse me print karde e.g: mehtab -> bathem


// 5. FACTORIAL
// DESCRIPTION:
// 1. user se koi b NUMBER input le
// 2. us number ka factorial find kr k print kare
// 3. factorial def:
// the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
// 4 * 3 * 2 * 1 = 24

