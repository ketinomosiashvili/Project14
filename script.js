// N1
// let array = [35, 68, 52, 89]

// array.push('javascript', 'python');
// array.unshift('html', 'css');
// console.log(array.length);
// array.shift();
// array.pop();
// console.log(array[0], array[array.length-1]);


// N2
// let fruit = ['orange', 'banana', 'pear']

// console.log(fruit.length);

// fruit.push('apple', 'pineapple');
// fruit.unshift('watermelon');
// console.log(fruit.length);

// fruit.splice(2, 0, 'mango')
// fruit.shift();
// fruit.pop();
// console.log(fruit.length);

// N3
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let numbers = array.map(x => x/3)
// console.log(numbers);

// N4

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let numbers = array.filter(function(x) {
//     return typeof x == 'number'
// })
// let numbers = array.filter(x => typeof x == 'number')
// console.log(numbers);

// N5

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let result = languages.filter(x => x.length > 3);
// console.log(result);

// N6

// let array= ['academy', 'of', 'digital', 'industries'].reduce((x, y) => x.concat(y));

// let array= ['academy', 'of', 'digital', 'industries'].reduce(function(x, y) {
//     return x.concat(y)
// },
// ''
// );


// console.log(array);

// N7
// let item = [12, 'google', 32, null, 'yahoo', 25];

// let result = item.map(x => (typeof x === 'number') ? x*x:
// (typeof x === 'string')? x.toUpperCase(): x
// );

// console.log(result);

// let result = item.map(function (x) {
//         if (typeof x === "number") {
//             console.log(x*x);
//         }else if (typeof x === "string") {
//             console.log(x.toUpperCase());
//         }
//         else{
//             console.log(x);
//         }
// })

// N8

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let result = words.filter(x => x.includes('m')|| x.includes('M'))

// console.log(result);


