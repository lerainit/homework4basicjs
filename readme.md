## Предназначение функций в програмировании

Функции необходимы, когда один и тот же код будет использоваться во многих местах затем, чтобы много раз не повторять и не перезаписывать одинаковый код.

Так же функции должны быть универсальными, то есть могут принимать в себя абсолютно разные аргументы и всегда выдавать одинаковый результат.

## Аргументы в функции

Функция может принимать в себя любые данные  обрабатывать их и выдавать результат в вызвавший ее код. 

Для этого функция должна иметь параметры(аргументы), которые определяют те данные ,с которыми будет работать вызванная нами функция.

```js

const rectangleSquare = function(a,b){

let result = a * b;

return result;

}

let randomRectangleSquare = rectangleSquare(4,6);
 
 console.log(randomRectangleSquare); // 24
 
 

// Функция принимает в себя любые значения сторон 
// прямоугольника(это аргументы функции)
// и возвращает площадь

```
 Параметр функции может не быть задан 
 
 Если параметр не указан, то его значением становится undefined.
 


## Return в функциях 

Функция принимает в себя заданые аргументы и должна возвращать из себя какой-либо результат, который будет в дальнейшем использован в коде ,вызвавшем ее. 

```js

 const calcSum = function(a,b,c){
 let sum = a + b + c;
 
 return sum;
 
 }
 
 alert(calcSum(24,65,87));

// Функция примет в себя заданые параметры в качестве //аргументов вернет их сумму и эта сумма появится в //сообщении в диалоговом окне
// Если бы не было return функция вернула бы undefined //при любых аргументах

```

Оператор return прерывает выполнение функции и возвращает результат ее выполнения в код, который ее вызвал.

function showGrade(name,lastname) {
  if ( !userName && ! lastName ) {
    return;
  }

  alert( `Ваша оценка за тестирование ${grade}` ); // (*)
  // ...
}


Если после return нет никаких инструкций ,то он прерывает выполнение функции и возвращается undefined ,как результат выполнения функции.

Если в функции нету return ,то она всегда возвращает undefined.
