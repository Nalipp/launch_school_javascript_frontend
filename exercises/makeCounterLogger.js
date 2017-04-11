function makeCounterLogger(value) {
  return function(endNum) {
    if (endNum < value) {
      for (var i = endNum; i <= value; i++) {
        console.log(i);
      }
    } else {
      for (var i = endNum; i >= value; i--) {
        console.log(i);
      }
    }
  }
}

var countlog = makeCounterLogger(5);

countlog(2);
console.log('break');
countlog(8);



