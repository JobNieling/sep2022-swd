# Meta

[Chapter 8: exceptions](https://dwa-courses.firebaseapp.com/08_error.html#h_zT3755/aOp)

# Question

Consider the following programm 

```javascript
const getValidNumber = (number) => {
    if (number === null) {
        throw new Error('Not Valid');
    }

    return number;
}

const printNumbers = (list) => {
    for (let i = 0; i < list.length; i++) {
        console.log(getValidNumber(list[i]));
    }
}

try {
    printNumbers([25.5, null, 10]);
} catch (err) {
    console.log(err.message);
}

```

Write down the console output when this program is run.