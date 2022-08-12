//1
let l = 0;
for(let n =0; n<=100; n++){
    if(n%2==0){
        l +=n;
    }
}
console.log(l);

//2
let b = 10;
for(let x = 0; x <=50; x++){
    if(b == x){
        break;
        
}
}
console.log(b);

//3
let c =30;
for(let y =0; y <=100; y++){
    if(y !=c){
        continue;
    }
}
console.log(c);


//4
let y=0;
let text = 'This is a hard work';
for(let i = 0; i<=text.length; i++){
    if(text[i] == 'a'){
        y ++;
    }
}
console.log(y);

//5
let text1 = 'This is a hard work';
let position;
for(p = 0; p<=text.length; p++){
    if(text1[p] == 'w'){
        position = p;
        
    }
}console.log(position);

//6
let text2 = 'This is a hard work';
let str = ' ';
for(q = 0; q<=text.length; q++){
    if(text2[q] == str){
        console.log(text2[q] = 'F');;
        
    }
}

console.log(text2);


//7 
let text3 = 'Я изучаю програмирование!';
let a = 7;
let o = 10;
let н = 20;
let count = 0;
let count1 = 0;
let count2 = 0;
for(r = 0; r<=text3.length; r++){
    if(text3[r] == 'а'){
       count++; 
    }
    if(text3[r] == 'о'){
        count1++; 
     }
     if(text3[r] == 'н'){
        count2++; 
     }
}

console.log("a", count*7);
console.log("о", count1*10);
console.log("н", count2*20);
console.log("Total", (count2*20) + (count1*10) + (count*7));



//8
let arr = [1, 3, 4, 'Текст', 'Другой текст', false];
let numbers = [];
let strings = [];
let booleans = [];
for(let t = 0; t<=arr.length; t++){
    if(typeof arr[t] == 'string'){
        strings.push(arr[t]);
    }
    if(typeof arr[t] == 'number'){
        numbers.push(arr[t]);
    }
    if(typeof arr[t] == 'boolean'){
        booleans.push(arr[t]);
    }
}
console.log('numbers', numbers, 'strings', strings, 'boolean', booleans) ;

