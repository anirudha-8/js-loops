// 9-Problem statement - Write a while loop to log numbers from 1 to 100 divisible by 5.

// one way
let i = 5;
while (i <= 100) {
	console.log(i);
	i += 5;
}

// second way
let j = 1;
while (j <= 100) {
	if (j % 5 === 0) console.log(j);
	j++;
}
