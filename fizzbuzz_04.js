var i = 0;
function fizzbuzz_04() {
  while(i < 1000) {
    if (i|0 % 5 == 0 && i|0 % 3 == 0) {
      console.log(i|0 + " : FizzBuzz");
    } else if (i|0 % 3 == 0) {
      console.log(i|0 + " : Fizz");
    } else if (i|0 % 5 == 0) {
      console.log(i|0 + " : Buzz");
    } else {
      console.log(i|0);
    }
    i=(i+1)|0;
  }
}

console.time('04');
fizzbuzz_04();
console.timeEnd('04');