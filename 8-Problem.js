// 8-Problem statement - Use a for loop to reverse an array `[1, 2, 3, 4]`.

const numbersArray = [1, 2, 3, 4];

// Use when don't need to mutate / modify the original array
let reversedNumbersArray = [];
for (let i = numbersArray.length - 1; i >= 0; i--) {
	reversedNumbersArray.push(numbersArray[i]);
}
// console.log(`Reversed array is: ${reversedNumbersArray}`);
console.log("Reversed array is: ", reversedNumbersArray);

// Use when in-place replacement is required
// optimized solution, no extra space required
console.log("original array is: ", numbersArray);
for (let i = 0; i < numbersArray.length / 2; i++) {
	let temp = numbersArray[i];
	numbersArray[i] = numbersArray[numbersArray.length - 1 - i];
	numbersArray[numbersArray.length - 1 - i] = temp;
}
console.log("after revering array is: ", numbersArray);
