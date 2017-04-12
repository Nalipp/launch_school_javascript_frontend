function later(func, message) {
  return function() {
    (setTimeout(function() {
      func(message);
    }, 2000))
  }
}
var logWarning = later(console.log, 'The system is shutting down!');

logWarning()
// The system is shutting down!
