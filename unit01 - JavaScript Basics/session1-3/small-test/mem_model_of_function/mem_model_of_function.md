# Meta

* [Chapter 3 the call stack](https://dwa-courses.firebaseapp.com/03_functions.html#h_D2Yui+mx6D)
* [Chapter 3 exercise: execture multiple times](https://dwa-courses.firebaseapp.com/03_functions.html#h_ErccPg/l98)

# Question

```js
const execute = (nrTimes, func) => {
    var person = {
        name: 'han',
        number: 21
    };
    for (var i = 0; i < nrTimes; i++) {
        func(person.name); 
    }
}

const n = 2;

const sayHiTo = (name) => {
  console.log(`Hi ${name}`);
}

execute(n, sayHiTo); 
```

Complete the memory model diagram on the next page when the program is executing the function `execute` line 17 and inside the this function, the function `func` on line 7 is currently being executed. The value of `i` is currently equal to 1.

_remarks:_

* You can leave the names of all 
