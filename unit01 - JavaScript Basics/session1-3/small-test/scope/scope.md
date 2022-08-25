# Meta

* [Chapter 3 Bindings and scopes](https://dwa-courses.firebaseapp.com/03_functions.html#h_EdyBGBF6y/)
* 


# Question

```js
console.log(x);
var x = 10;
```
* `10`
--> `undefined`
* An Error


```js
console.log(x);
let x = 10;
```
* `10`
* `undefined`
--> An Error


//Deze kan eigenlijk niet, tenzij we ergens de regel toevoegen dat 
//een const geïnitialiseerd moet worden
```js
const x;
console.log(x);
```
* `10`
* `undefined`
--> An Error



```js
const check = true;
if (check) {
    let x = 10;
}
console.log(x);
```
* `10`
* `undefined`
--> An Error

```js
for (var i = 0; i < 11; i++) {
    var x = i;
}
console.log(x);
```
--> `10`
* `undefined`
* An Error

```js
function setX(value) {
    var x = value;
}
setX(10);
console.log(x);
```
* `10`
* `undefined`
--> An Error