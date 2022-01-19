const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');



stdin.on('data', (key) => {
  if (key === '\u0062') { // 
    let b = 0;
    process.stdout.write('\u0007');
    process.stdout.write(`setting timer for ${b} seconds...\n`);
  } else if (key === '\u0031') { // 
    let b = 1;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 1000);
  } else if (key === '\u0032') { // 
    let b = 2;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 2000);
  } else if (key === '\u0033') { // 
    let b = 3;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 3000);
  } else if (key === '\u0034') { // 
    let b = 4;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 4000);
  } else if (key === '\u0035') { // 
    let b = 5;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 5000);
  } else if (key === '\u0036') { // 
    let b = 6;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 6000);
  } else if (key === '\u0037') { // 
    let b = 7;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 7000);
  } else if (key === '\u0038') { //
    let b = 8;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 8000);
  } else if (key === '\u0039') { // 
    let b = 9;
    process.stdout.write(`setting timer for ${b} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 9000);
  } else if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});