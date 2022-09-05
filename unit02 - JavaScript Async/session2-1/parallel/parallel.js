const task = [];

let done = 'Klaar met alle taken';

setTimeout(() => {
    console.log('Klaar met taak A');
    task.push('Klaar met taak A');
    //Pas hier de code aan
    if(task.length === 3) {
        console.log(done);    
    }
    
}, Math.random() * 1000);

setTimeout(() => {
    console.log('Klaar met taak B'); 
    task.push('Klaar met taak B');   
    //Pas hier de code aan
    if(task.length === 3) {
        console.log(done);    
    }
}, Math.random() * 1000);

setTimeout(() => {
    console.log('Klaar met taak C');
    task.push('Klaar met taak C');
    //Pas hier de code aan
    if(task.length === 3) {
        console.log(done);   
    }
}, Math.random() * 1000);