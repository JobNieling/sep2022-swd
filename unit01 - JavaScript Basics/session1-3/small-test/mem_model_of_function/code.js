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