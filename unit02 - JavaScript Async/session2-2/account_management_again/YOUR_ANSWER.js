const pw = require('./promise-wrappers');

users = [
    {
        "account": "ashlee_waters",
        "username": "ASH"
    },
    {
        "account": "hilario_muller",
        "username": "Hilario_Muller29"
    },
    {
        "account": "serena_klein",
        "username": "Serena.Klein"
    }
];

promise.all(users.map(user => {
    return pw.writeFileP(`${user.account}`, user.username);
})).then(() => {
    console.log('done');
}).catch( err => {
    console.log(err.message);
})

//------------------------

let testArray = [];

user.forEach(element => {
    testArray.push(pw.writeFileP(`${element.account}`, element.username))
});

promise.all(testArray);

//--------------------------

pw.readFileP("users.json").then(data => {
    const users = json.parse(data);
    users.forEach(user => {
        promises.push(pw.writeFileP(user.account, user.username));
    })
})

return promise.all(promises, {});