# AdvancedJS
JavaScript 高级程序设计学习
## 第5章、引用类型
- 引用类型的值是一个引用类型的实例（对象），与这个值关联的变量名指向它
- `JavaScript` 中的引用类型又称为对象定义，描述的是一类对象所具有的属性和方法
- 使用 `new` 操作符后跟一个构造函数创建一个引用类型的实例
    ```
    // 对象定义
    // 创建一个 Object 实例，然后与变量 person 关联 
    var person = new Object();
    ```
### Object 类型
- 定义 `Object` 实例的两种方式：
    - 使用 `new` 操作符
        ```
        var person = new Person();
        person.name = "Nicholas";
        person.age = 30;
        ```
    - 使用对象字面量
        ```
        var person = {
            name: 'Nicholas',
            age: 30
        };
        ```
        - 使用字面量语法时，属性值也可以用字符串
            ```
            var person = {
                'name':'Nicholas',
                'age':30
            };
            ```
- 使用字面量语法创建一个空对象时，只会包含默认属性和方法
    ```
    var person = {};        // 与 new Object() 相同
    person.name = 'Nicholas';
    person.age = 30;
    ```
- 向函数传递大量可选参数时，也建议使用对象字面量
    ```
    function displayInfo(args){
        var output = "";
        if(typeof args.name == "string){
            output += "Name: " +  args.name + "\n";
        }
        if(typeof args.age == "number"){
            output += "Age: " + args.age + "\n";
        }
        return output;
    }
    displayInfo({
        name: 'Nicholas',
        age: 30
    });
    ```
- 访问对象属性的方法：
    - 使用 `[]`
        ```
        console.log(person['name']);
        ```
    - 使用 `.`
        ```
        console.log(person.name);
        ```
    - 当属性名中包含空格等字符时，可以使用 `[]` 访问
### Array 类型
- 使用 `Array` 类型创建数组，数组中的元素类型可以不相同，数组长度可以动态调整
- 创建数组对象的两种方式
    - 使用 `Array` 构造函数
        ```
        var colors = new Array();
        ```
        - 如果预先知道数组中要保存的元素数量，也可以给构造函数传递长度参数，该长度参数会自动变为数组 `length` 属性的值
            ```
            var colors = new Array(20);
            ```
        - 可以向 `Array` 构造函数中直接传递元素值用来创建一个数组对象
            ```
            var colors = new Array('red', 'green', 'blue');
            ```
        - 使用构造函数创建数组时可以省略 `new` 操作符
            ```
            var colors = Array(3);
            var names = Array('Nicholas', 'Greg');
            ```
    - 使用数组字面量
        ```
        var name = [];
        var colors = ['red', 'green', 'blue'];
        ```
- 读取和设置数组元素的值时，使用 `[]` 并提供基于 `0` 的数组索引
    ```
    var colors = ['red', 'green', 'blue'];
    console.log(colors[0]);
    colors[2] = 'black';
    ```
- 数组元素的个数保存在 `length` 属性中，`length` 属性是可以修改的
    ```
    var colors = ['red', 'green', 'blue'];
    console.log(colors.length);     // 3
    colors.length = 2;
    console.log(colors[2]);         // undefined
    console.log(colors);            // ['red', 'green']
    colors.length = 4;
    console.log(colors[3]);        // undefined
    colors[3] = 'black';
    console.log(colors);            // ['red', 'green', <1 empty item>, 'black']
    ```
    - 可以通过 `length` 属性方便地在数组末尾添加元素
        ```
        var colors = ['red', 'green', 'blue'];
        colors[colors.length] = 'black';
        console.log(colors);            // ['red', 'green', 'blue', 'black'];
        ```
- 检测数组：使用 `Array.isArray(value)` 方法
- 转换方法：
    - `toString()` `valueOf()` `toLocaleString()`
        ```
        var colors = ['red', 'green', 'blue'];
        console.log(colors.toString());             // red, green, blue
        console.log(colors.valueOf());              // ['red', 'green', 'blue' ]
        console.log(colors);                        // ['red', 'green', 'blue' ]
        ```
        ```
        var person1 = {
            toLocaleString: function(){
                return 'Nikolaos';
            },
            toString: function(){
                return 'Nicholas';
            }
        };
        var person2 = {
            toLocaleString: function(){
                return 'Grigorios';
            },
            toString: function(){
                return 'Greg';
            }
        };
        var people = [person1, person2];
        console.log(people);
        console.log(people.toString());
        console.log(people.toLocaleString());
        ```
    - `join()` 方法接收一个用作分隔符的字符串，然后返回包含所有数组项的字符串
        ```
        var colors = ['red', 'green', 'blue'];
        console.log(colors.join(', '));     // red, green, blue
        console.log(colors.join(' || '));   // red || green || blue
        ```
- 栈方法
    - `push` 在数组末尾插入新元素，并返回新数组的长度
        ```
        var colors = new Array();
        colors.push('red', 'green');
        colors.push('black');
        ```
    - `pop` 从数组末尾移除最后一项，将 `length` 值减 1，返回移除的数组项
        ```
        var item = colors.pop();
        console.log(item);          // black
        console.log(colors.length); // 2
        ```
- 队列方法
    - 'push' 和 `shift` 方法，`shift` 方法移除并返回数组的第一项
        ```
        var colors = ['red', 'green', 'blue'];
        var item = colors.shift();
        console.log(item);                  // red
        console.log(colors.length);          // 2
        ```
    - 使用 `unshift` 和 `pop` 方法，`unshift` 方法在数组前端添加元素并返回新数组的长度
        ```
        var colors = new Array();
        colors.unshift('red', 'green');
        colors.unshift('blue');
        console.log(colors);            // ['blue', 'red', 'green']
        ```
- 重排序方法
    - `reverse` 方法：反转数组项的顺序
        ```
        var colors = ['red', 'green', 'blue'];
        colors.reverse();
        console.log(colors);        // ['blue', 'green', 'red']
        ```
    - `sort` 方法：对数组进行排序，默认调用每个数组项的 `toString()` 方法，然后比较得到的字符串
        ```
        var values = [1, 5, 10, 105, 20, 25, 9];
        console.log(values.sort());         // [1, 10, 105, 20, 25, 5, 9]
        ```
    - `sort` 方法还可以接收一个比较函数作为参数，比较函数接收两个参数，如果第一个参数应该在第二个参数之前则返回一个负数，如果两个参数相等返回 0，如果第一个参数应该在第二个参数之后则返回一个正数
        ```
        var values = [1, 5, 10, 105, 20, 25, 9];
        values.sort(function(first, second){
            if(first < second){
                return -1;
            } else if(first == second){
                return 0;
            } else{
                return 1;
            }
        });
        console.log(values);        // [1, 5, 9, 10, 20, 25, 105]
        ```
    - 可以修改比较函数，实现按照降序排序
- 操作方法
    - `concat` 方法：将接收的参数添加到数组末尾，返回新数组，原数组不变
        ```
        var colors = ['red', 'green', 'blue'];
        var colors2 = colors.concat('yellow', ['black', 'brown']);
        console.log(colors);        // ['red', 'green', 'blue'];
        console.log(colors2);       // ['red', 'green', 'blue', 'yellow', 'black', 'brown']
        ```
    - `slice` 方法：接收起始位置和结束位置两个参数，返回两个位置之间的元素组成的新数组，原数组不变，默认传入一个参数时，该参数为起始位置，结束位置默认为 `array.length`
        ```
        var colors3 = colors2.slice(1);
        var colors4 = colors2.slice(1, 4);
        console.log(colors2);   // ['red', 'green', 'blue', 'yellow', 'black', 'brown']
        console.log(colors3);   // ['green', 'blue', 'yellow', 'black', 'brown']
        console.log(colors4);   // ['green', 'blue', 'yellow']
        ```
    - `splice` 方法：用于向数组中插入元素，可实现删除、插入、替换功能，接收三个参数：第一个是开始插入的位置，第二个是要删除的元素数量，第三个是要插入的元素
        - 删除：只需要传入两个参数，起始位置和要删除的元素数量
        - 插入：传入三个参数，起始位置、`0`（一个原始元素也不删除）、插入的元素
        - 替换：传入三个参数，起始位置、要替换的项数、替换的新元素
        ```
        var colors = ['red', 'green', 'blue'];
        // 删除第一项
        colors.splice(0, 1);
        console.log(colors);        // ['green', 'blue']
        // 从位置1处开始插入两项：'yellow', 'orange'
        colors.splice(1, 0, 'yellow', 'orange');
        console.log(colors);        // ['green', 'yellow', 'orange', 'blue']
        // 将 'yellow' 替换为两项：'red' 和 'purple'
        colors.splice(1, 1, 'red', 'purple');
        console.log(colors);        // ['green', 'red', 'purple', 'orange', 'blue']
        ```
- 位置方法
    - `indexOf` 和 `lastIndexOf` 方法：接收两个参数：要查找的元素值和查找起点位置的索引（可选）
        ```
        var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
        console.log(numbers.indexOf(4));        // 3
        console.log(numbers.indexOf(4, 4));     // 5
        console.log(numbers.lastIndexOf(4));    // 5
        console.log(numbers.lastIndexOf(4, 4)); // 3
        ```
- 迭代方法：传入两个参数：在每一项上运行和函数和运行在函数的作用域对象（可选）
    - `every`：对数组中每一项运行给定函数，如果每一项都返回 `true` 则返回 `true`
    - `some`：对数组中每一项运行给定函数，如果存在一项返回 `true` 则返回 `true`
    - `filter`：对数组中每一项运行给定函数，返回该函数会返回 `true` 的项组成的数组
    - `forEach`：对数组中每一项运行给定函数，没有返回值
    - `map`：对数组中每一项运行给定函数，返回每次函数调用的结果组成的数组
        ```
        var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
        var everyResult = numbers.every(function(value, index, array){
            return (value > 2);
        });
        console.log(everyResult);               // false
        var someResult = numbers.some(function(value, index, array){
            return (value > 2);
        });
        console.log(someResult);                // true
        var filterResult = numbers.filter(function(value, index, array){
            return (value > 2);
        });
        console.log(filterResult);              // [3, 4, 5, 4, 3]
        var mapResult = numbers.map(function(value, index, array){
            return value * 2;                       
        });
        console.log(mapResult);                 // [2, 4, 6, 8, 10, 8, 6, 4, 2]
        console.log(numbers);                   // [1, 2, 3, 4, 5, 4, 3, 2, 1]

        numbers.forEach(function(value, index, arr){
            arr[index] = value * 2;
        });
        console.log(numbers);                   // [2, 4, 6, 8, 10, 8, 6, 4, 2]
        ```
- 缩小方法
    - `reduce`：迭代数组的所有项，构建一个最终返回的值。接收两个参数：一个是在每一项上调用的函数和一个初始值（可选）
        - 调用的函数接收4个参数：前一个值、当前值、项的索引、数组对象
        ```
        var numbers = [1, 2, 3, 4];
        var arrtonumber = numbers.reduce(function(prev, current, index, arr){
            return prev * 10 + current;
        }, 0);
        console.log(arrtonumber);           // 1234
        console.log(typeof arrtonumber);    // number
        ```
    - `rightReduce`：与 `reduce` 类似，迭代顺序从后向前
