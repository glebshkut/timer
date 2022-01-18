const timer = (args) => {
  for (let arg of args) {
    arg = Number(arg);
    if (arg === NaN || arg < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, 1000 * arg);
  }
}


const args = process.argv.slice(2);
timer(args);