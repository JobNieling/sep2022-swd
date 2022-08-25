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