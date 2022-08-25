# Toetsvragen



Welke van de onderstaande manieren van het definieren van een functie is NIET valide?
<ol type="a">
  <li>function sum (a, b) { return a + b; }</li>
  <li>const sum = function (a, b) { return a + b; }</li>
  <li>let sum = function (a, b) { return a + b; }</li>
  <li>const sum = (a, b) => a + b;</li>
  <li>let sum = a, b => { return a + b }</li>
</ol>

In de onderstaande code wat wordt er op de console gelogd?

```javascript
let a = 3;
var b = 3;

if (a === b) {
  let a = 4;
  var b = 4;
}

console.log(a, b);
```
...

(goede antwood: "3 4")

Welk van de onderstaande stukken code geeft een Error op regel 1?
A. 
```javascript
console.log(sayHello("Lars"));

function sayHello (person) {
  return "Hello " + person;
}
```

B.
```javascript
console.log(sayHello("Lars"));

let sayHello = function (person) {
  return "Hello " + person;
}
```

Neem de onderstaande JavaScript code, wat wordt er toegewezen aan b?
```javascript
 var a = {} 
 var b = a
 ```
<ol type="a">
  <li>`undefined`</li>
  <li>Een kopie van `a`</li>
  <li>Een verwijzing naar `a`</li>
  <li>De bovenstaande code geeft een foutmelding omdat er een geen `;` achter staat.</li>
</ol>

Neem de onderstaande JavaScript code, wat wordt er op de console gelogd?
```javascript
var a = {
  naam: 'robert'
}
var b = a
b.naam = 'sander'
console.log(a['naam'])
```
<ol type="a">
  <li>`undefined`</li>
  <li>`robert`</li>
  <li>`sander`</li>
  <li>De bovenstaande code geeft een foutmelding omdat er een geen `;` achter staat.</li>
  <li>`lars`</li>
</ol>