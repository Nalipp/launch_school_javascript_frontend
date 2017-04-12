var arr = 'hello spiderman'.split('');

function recursion(arr) {
  if (arr.length > 0) {
    console.log(arr[0]);
    recursion(arr.slice(1));
  }
}

recursion(arr);
