function makeList() {
  var items = [];
  return {
    list: function() {
      if (items.length === 0) {
        console.log('There are no items on the list.'); 
      } else {
        items.forEach(function(value) {
          console.log(value); 
        });
      }
    },
    add: function(item) {
      items.push(item);
      console.log(item + ' added!'); 
    },
    remove: function(item) {
      var index = items.indexOf(item);
      if (index === -1) {
        console.log(item + ' is not on the list.'); 
      } else {
        items.splice(index, 1);
        console.log(item + ' removed!'); 
      }
    },
  }
}

var list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn


// function makeList(){
//   var list = [];
//   return function(argument) {
//     if (argument) {
//       var index = list.indexOf(argument);
//       if (index === -1) {
//         list.push(argument)
//         console.log(argument + ' added!');
//       } else { 
//         list.splice(index, 1)
//         console.log(argument + ' removed!');
//       } 
//     } else {
//       if (list.length === 0) {
//         console.log('There are no items in the list.');
//       } else {
//         list.forEach(function(value) {
//           console.log(value);
//         });
//       }
//     }
//   }
// }

