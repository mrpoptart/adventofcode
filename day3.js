input = 265149;

let x = 1
let add = 8;
let ring = 1;
let width = 1;
while (x < input) {
	ring ++;
	x += add;
	add += 8
	width +=2;
}
let side = x;
while(side > input) {
	side-=(width-1)
}
let sideCenter = side + ((width - 1) / 2);

let distanceToSideCenter = Math.abs(sideCenter - input)

let distanceToCenter = distanceToSideCenter + ring - 1;

console.log(distanceToCenter)

       // 65                           57
       //    37 36  35  34  33  32  31
       //    38 17  16  15  14  13  30
       //    39 18   5   4   3  12  29
       //    40 19   6   1   2  11  28
       //    41 20   7   8   9  10  27
       //    42 21  22  23  24  25  26
       //    43 44  45  46  47  48  49 50
       // 73                           81 82

// //what ring are we in?
// 1, 9, 25, 49, 81
// 1 +8 +16 +24 +32
