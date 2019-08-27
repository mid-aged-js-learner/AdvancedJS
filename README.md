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





