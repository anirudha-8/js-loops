// 8-Problem statement - Use a for loop to reverse an array `[1, 2, 3, 4]`.

const numbersArray = [1, 2, 3, 4];

let reversedNumbersArray = [];

for (let i = numbersArray.length - 1; i >= 0; i--) {
	reversedNumbersArray.push(numbersArray[i]);
}

// console.log(`Reversed array is: ${reversedNumbersArray}`);
console.log("Reversed array is: ", reversedNumbersArray);
