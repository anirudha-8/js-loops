// 10-Problem statement - Use a for...in loop to iterate over an object and log its keys.

const userProfile = {
	fullName: "Anirudha Ramchandra Bele",
	age: 23,
	status: "Unmarried",
	profession: "Full Stack Web Developer",
};

console.log(`\nKeys in the "userProfile" object are listed below...`);
let i = 1;
for (const key in userProfile) {
	console.log(`${i++}) ${key}`);
}
