//var text = "mom and dad and baby";
//var pattern = /mom( and dad( and baby)?)?/gi;
//var matches = pattern.exec(text);
//console.log(matches);

//var text = "cat, bat, sat, fat";
//var pattern1 = /.at/;
//
//var matches = pattern1.exec(text);
//console.log(matches.index);         // 0
//console.log(matches[0]);            // cat
//console.log(pattern1.lastIndex);    // 0
//
//matches = pattern1.exec(text);
//console.log(matches.index);         // 0
//console.log(matches[0]);            // cat
//console.log(pattern1.lastIndex);    // 0
//
//var pattern2 = /.at/g;
//matches = pattern2.exec(text);
//console.log(matches.index);         // 0
//console.log(matches[0]);            // cat
//console.log(pattern2.lastIndex);    // 3
//
//matches = pattern2.exec(text);
//console.log(matches.index);         // 5
//console.log(matches[0]);            // bat
//console.log(pattern2.lastIndex);    // 8

var text = "cat, bbt, sat, fdt";
var pattern1 = /.at/;
console.log(pattern1.test(text));
console.log(pattern1.test(text));
var pattern2 = /.at/g;
console.log(pattern2.test(text));
console.log(pattern2.test(text));
console.log(pattern2.test(text));