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

var colors = ['red', 'green', 'blue'];
colors.reverse();
console.log(colors);

var values = [1, 5, 10, 105, 20, 25, 9];
//console.log(values.sort(function(first, second){
//    if(first < second){
//        return -1;
//    } else if(first == second){
//        return 0;
//    } else{
//        return 1;
//    }
//}));
console.log(values.sort(function(first, second){
    if(first < second){
        return 1;
    } else if(first == second){
        return 0;
    } else{
        return -1;
    }
}));
