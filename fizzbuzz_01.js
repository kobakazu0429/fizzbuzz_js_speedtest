function fizzbuzz_01() {
  for (var i = 0; i < 1000; i++) {
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

console.time('01');
fizzbuzz_01();
console.timeEnd('01');