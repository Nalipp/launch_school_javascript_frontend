var sum = 0;
function add(value) {
  sum += value;
  console.log(sum);
}

function subtract(value) {
  sum -= value;
  console.log(sum);
}


add(1)
// 1
add(42);
// 43
subtract(39);
// 4
add(6);
// 10
