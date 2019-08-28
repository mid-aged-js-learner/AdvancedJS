function format_date(date){
    return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
}

var date = new Date();
console.log(date);
console.log(format_date(date));
var date1 = new Date(Date.parse("2019-01-01 12:34:56"));
console.log(date1);
console.log(format_date(date1));
var date2 = new Date(Date.UTC(2019, 0, 1, 0, 0, 0));
console.log(date2);
console.log(format_date(date2));

var now = Date.now();
console.log(now);
console.log(format_date(new Date(now)));
