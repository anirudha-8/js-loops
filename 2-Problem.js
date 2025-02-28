// 2-Problem statement - Use a while loop to sum the numbers from 1 to 10.

let sumFromOneToTen = 0,
	counter = 1;

while (counter <= 10) {
	sumFromOneToTen += counter++;
}

console.log(`Sum of 1 to 10: ${sumFromOneToTen}`);
