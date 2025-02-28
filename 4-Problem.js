// 4-Problem statement - Write a for loop that skips even numbers between 1 and 20.

// first way
/* 
for (let i = 1; i <= 20; i++) {
	if (i % 2 === 0) continue;
	console.log(i);
}
*/

// second way
for (let i = 1; i <= 20; i += 2) {
	console.log(i);
}
