const fs = require('fs');
const input = fs.readFileSync('./day4.txt', "utf8");
const lines = input.split('\n');

let out = lines.reduce((total, line)=>{
	let found = '';
	return line.split(' ').sort().reduce((good,pw)=>{
		if(good && found !== pw){
			found = pw;
			return true;
		}
		return false;
	}, true) ? total + 1 : total
}, 0);

console.log(out);
