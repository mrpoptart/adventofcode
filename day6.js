const input = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6]

const hashes = {};

let count = 0;

let lastHash = input.join('-')
hashes[lastHash] = true;
process();

while (!hashes[lastHash]) {
	process();
}

console.log(count);

function process(){
	hashes[lastHash] = true;
	let index = input.indexOf(input.reduce((a,b)=>{return Math.max(a,b)}));
	distribute(index);
	count ++;
	lastHash = input.join('-')
}

function distribute(index) {
	let val = input[index]
	input[index] = 0;
	while(val){
		index ++;
		if(index == input.length) index = 0;
		input[index] ++;
		val --;
	}
}
