// 7-Problem statement - Write a nested loop to print a 3×3 grid of numbers.

let hold = 1;

for (let i = 0; i < 3; i++) {
	let str = "";
	for (let j = 0; j < 3; j++) {
		str += `${hold} `;
		hold++;
	}
	console.log(str.trim());
}
