//var colors = ['red', 'green', 'blue'];
//console.log(colors.toString());
//console.log(colors.valueOf());
//console.log(colors);
//
//var person1 = {
//    toLocaleString: function(){
//        return 'Nikolaos';
//    },
//    toString: function(){
//        return 'Nicholas';
//    }
//};
//var person2 = {
//    toLocaleString: function(){
//        return 'Grigorios';
//    },
//    toString: function(){
//        return 'Greg';
//    }
//};
//var people = [person1, person2];
//console.log(people);
//console.log(people.toString());
//console.log(people.toLocaleString());
//
//colors = new Array();
//colors.unshift('red', 'green');
//colors.unshift('blue');
//console.log(colors);

//var colors = ['red', 'green', 'blue'];
//colors.reverse();
//console.log(colors);
//
//var values = [1, 5, 10, 105, 20, 25, 9];
//console.log(values.sort(function(first, second){
//    if(first < second){
//        return -1;
//    } else if(first == second){
//        return 0;
//    } else{
//        return 1;
//    }
//}));
//console.log(values.sort(function(first, second){
//    if(first < second){
//        return 1;
//    } else if(first == second){
//        return 0;
//    } else{
//        return -1;
//    }
//}));
//var colors = ['red', 'green', 'blue'];
//var colors2 = colors.concat('yellow', ['black', 'brown']);
//console.log(colors);
//console.log(colors2);
//var colors3 = colors2.slice(1);
//var colors4 = colors2.slice(1, 4);
//console.log(colors2);
//console.log(colors3);
//console.log(colors4);

//var colors = ['red', 'green', 'blue'];
// 删除第一项
//colors.splice(0, 1);
//console.log(colors);        // ['green', 'blue']
// 从位置1处开始插入两项：'yellow', 'orange'
//colors.splice(1, 0, 'yellow', 'orange');
//console.log(colors);        // ['green', 'yellow', 'orange', 'blue']
// 将 'yellow' 替换为两项：'red' 和 'purple'
//colors.splice(1, 1, 'red', 'purple');
//console.log(colors);        // ['green', 'red', 'purple', 'orange', 'blue']

//var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
//console.log(numbers.indexOf(4));        // 3
//console.log(numbers.indexOf(4, 4));     // 5
//console.log(numbers.lastIndexOf(4));    // 5
//console.log(numbers.lastIndexOf(4, 4)); // 3
//var everyResult = numbers.every(function(value, index, array){
//    return (value > 2);
//});
//console.log(everyResult);               // false
//var someResult = numbers.some(function(value, index, array){
//    return (value > 2);
//});
//console.log(someResult);                // true
//var filterResult = numbers.filter(function(value, index, array){
//    return (value > 2);
//});
//console.log(filterResult);              // [3, 4, 5, 4, 3]
//var mapResult = numbers.map(function(value, index, array){
//    return value * 2;                       
//});
//console.log(mapResult);                 // [2, 4, 6, 8, 10, 8, 6, 4, 2]
//console.log(numbers);                   // [1, 2, 3, 4, 5, 4, 3, 2, 1]
//
//numbers.forEach(function(value, index, arr){
//    arr[index] = value * 2;
//});
//console.log(numbers);                   // [2, 4, 6, 8, 10, 8, 6, 4, 2]
var numbers = [1, 2, 3, 4];
var arrtonumber = numbers.reduce(function(prev, current, index, arr){
    return prev * 10 + current;
}, 0);
console.log(arrtonumber);           // 1234
console.log(typeof arrtonumber);    // number