function fizzbuzz_02() {
  for (var i = 1000; i > 0; i--) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log(i + " : FizzBuzz");
    } else if (i % 3 == 0) {
      console.log(i + " : Fizz");
    } else if (i % 5 == 0) {
      console.log(i + " : Buzz");
    } else {
      console.log(i);
    }
  }
}

console.time('02');
fizzbuzz_02();
console.timeEnd('02');