//1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
let arr = ['a', 'b', 'c'];
let arr1 = [1, 2, 3];
console.log(arr+","+arr1);
//2. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arr2 = ['a', 'b', 'c'];
let arr3 = [1, 2, 3];
arr2.push(arr3);
console.log(arr2);
//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
arr4.push(arr5);
console.log(arr4);
//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
arr6.unshift(arr7);
console.log(arr6);
//5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let arr8 = ['js', 'css', 'jq'];
console.log(arr8[0]);
//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let arr9 = ['js', 'css', 'jq'];
console.log(arr9[2]);
//7.Дан массив [3, 4, 5]. Удалите последний элемент массива
let arr10 = [3, 4, 5];
arr10.pop();
console.log(arr10);
//8.Дан массив [1, 2, 3]. Удалите первый элемент массива
let arr11 = [1, 2, 3];
arr11.shift();
console.log(arr11);
//9.Создайте массив и добавьте чётные числа из 1 до 100 в этот массив 
let array = [];
for(let t = 1; t<=100; t++){
    if(t % 2 == 0){
        array.push(t);
    }
}
console.log(array);

//10.Разделите массивы по типу данный массив [1, ‘hello’, true, 2, ‘4’, false]
let arr12 = [1, 'hello', true, 2, '4', false];
let num = [];
let str = [];
let boolean = [];
for(let j = 0; j<=arr12.length; j++){
    if(typeof arr12[j] == 'string'){
        str.push(arr12[j]);
    }
    if(typeof arr12[j] == 'number'){
        num.push(arr12[j]);
    }
    if(typeof arr12[j] == 'boolean'){
        boolean.push(arr12[j]);
    }
}
console.log('Numbers', num);
console.log('Strings', str);
console.log('Booleans', boolean);
