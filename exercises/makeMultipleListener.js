function makeMultipleLister(multiple) {
  return function() {
    for (var i = 2; i < multiple; i++) {
      if (multiple % i === 0) {
        console.log(i);
      }
    }
    for (var i = multiple; i <= 100; i++) {
      if (i % multiple === 0) {
        console.log(i);
      }
    }
  }
}

var lister = makeMultipleLister(12);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91
