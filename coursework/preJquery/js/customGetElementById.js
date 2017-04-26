function walk(node, callback) {
  callback(node)
  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}


function getElementsByTagName(tagName) {
  result = [];

  walk(document.body, function(value) {
    if (value.tagName.toLowerCase() === arg) result.push(value); 
  })
  return result;
}


getElementsByClassName(className)
