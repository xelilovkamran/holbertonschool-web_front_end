function countPrimeNumbers() {
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }

    return num > 1;
  }

  let count = 0;

  for (let i = 2; i < 100; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}

const startTime = this.performance.now();

countPrimeNumbers();

const terminateTime = this.performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    terminateTime - startTime
  } milliseconds.`
);
