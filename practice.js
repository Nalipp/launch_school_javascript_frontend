//// walk() calls the Function callback once for each node
function walk(node, callback) {
  // do something with node
  callback(node);

  // for each child node
  for (var i = 0; i < node.childNodes.length; i++) {
    // recursively call walk()
    walk(node.childNodes[i], callback);
  }
}

// log the nodeName of every node
walk(document.body, function(node) {
  console.log(node.nodeName);
});
