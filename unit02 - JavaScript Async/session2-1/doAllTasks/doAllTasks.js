// to call the code use: node doAllTasks.js
/* A */

let doAllTasks = (done) => {
    setTimeout(() => {
        console.log('Taak 1 klaar');
        setTimeout(() => {
            console.log('Taak 2 klaar');
            done();
        }, Math.random() * 100);
    }, Math.random() * 100);    
};

/* B */

let printWhenFinished = () => {
    console.log('Alle taken klaar');
    console.log('nu gaan we andere dingen doen');
};

doAllTasks(printWhenFinished);

/* C */

let doAllTasks2 = (func) => {
    let completedTasks = [];
    setTimeout(() => {
        completedTasks.push('Taak 1 klaar');
        setTimeout(() => {
            completedTasks.push('Taak 2 klaar');
            /* C) Plaats je aanpassing op deze regel */
            func(completedTasks);
        }, Math.random() * 100);
    }, Math.random() * 100);    
}; 

/* D */
let printResults = (resultList) => {
    console.log('Alle taken klaar, dit zijn de resultaten');
    resultList.forEach((result) => {
        console.log(result);
    });
};

doAllTasks2(printResults);