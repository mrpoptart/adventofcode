const fs = require('fs');
const input = fs.readFileSync('./day5.txt', "utf8");

const jumps = input.split('\n').map((jump)=>{return parseInt(jump)})

let pointer = 0;
let steps = 0

while(pointer < jumps.length && pointer > -1){
	steps ++;
	let oldPointer = pointer;
	pointer += jumps[pointer];
	jumps[oldPointer] += 1;
}

console.log(steps);
