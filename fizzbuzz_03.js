var i = 0;

function fizzbuzz_03() {
  while (i < 1000) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log(i + " : FizzBuzz");
    } else if (i % 3 == 0) {
      console.log(i + " : Fizz");
    } else if (i % 5 == 0) {
      console.log(i + " : Buzz");
    } else {
      console.log(i);
    }
    i++;
  }
}

console.time('03');
fizzbuzz_03();
console.timeEnd('03');