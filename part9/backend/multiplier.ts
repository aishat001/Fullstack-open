const multiplicator = (a, b, printText) => {
  console.log(printText,  a * b);
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);
// multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');



