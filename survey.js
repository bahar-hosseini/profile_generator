const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :`, (answer) => {
  console.log(`Thank you for inserting your name ${answer}`);

  rl.question(`What's an activity you like doing? `, (answer) => {
    console.log(`Thank you for inserting your favourite activity ${answer}`);

    rl.question(`What do you listen to while doing that? `, (answer) => {
      console.log(`Thank you for inserting your favourite music ${answer}`);
  
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
        console.log(`Thank you for inserting your favourite meal ${answer}`);
  
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          console.log(`Thank you for inserting your favourite part of meal ${answer}`);

          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            console.log(`Thank you for inserting your favourite activity ${answer}`);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
              console.log(`Thank you for inserting your superpower ${answer}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

