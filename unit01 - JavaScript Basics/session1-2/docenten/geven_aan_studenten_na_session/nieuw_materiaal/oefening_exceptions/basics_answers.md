## 1

```javascript
function getName(name) {
    if (name === '') {
        throw new Error('Empty Name');
    }
    return name;
}

const names = ['ica', '', 'han'];


for (let i = 0; i < names.length; i++ ) {
    try { 
        console.log (getName(names[i]));
    }
    catch (error) {
        console.log(error.message);
    }
}
```

```t
ica
Empty Name
han
```

## 2: try zonder catch

```javascript
function getName(name) {
    if (name === '') {
        throw new Error('Empty Name');
    }
    return name;
}

const names = ['ica', '', 'han'];


for (let i = 0; i < names.length; i++ ) {
    try {
        console.log (getName(names[i]));
    }
}
```

```t
/Users/larstijsma/dwa/swd_v2/unit01 - JavaScript Basics/session1-2/docenten/workshop/new_material/oefening_exceptions/basics.js:17
    }
    ^

SyntaxError: Missing catch or finally after try
```

## 3: Geen try catch block

```javascript
function getName(name) {
    if (name === '') {
        throw new Error('Empty Name');
    }
    return name;
}

const names = ['ica', '', 'han'];


for (let i = 0; i < names.length; i++ ) {
    console.log (getName(names[i]));
}
```

```t
ica
/Users/larstijsma/dwa/swd_v2/unit01 - JavaScript Basics/session1-2/docenten/workshop/new_material/oefening_exceptions/basics.js:5
        throw new Error('Empty Name');
        ^

Error: Empty Name
```

## 4: For-lus in het try block

```javascript
function getName(name) {
    if (name === '') {
        throw new Error('Empty Name');
    }
    return name;
}

const names = ['ica', '', 'han'];



try { 
    for (let i = 0; i < names.length; i++ ) { 
        console.log (getName(names[i]));
    }
}
catch (error) { 
        console.log(error.message);
}
```

```t
ica
Empty Name
```

