const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask user for the anme input
rl.question(`Cual es tu nombre?`, (name) => {

    // ask for nationality
    rl.question(`Cual es tu rut? `, (rut) => {

        // log user details
        console.log(`${name} is from ${rut.replace('\.')}`);

        // close the stream
        rl.close();
    });

});