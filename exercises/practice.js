function newTime() {
  return {
    startTime: 0,
    stopTime: 0,
    totalTime: 0,
    setStartTime: function() {
      this.startTime = Date.now()
    },
    setStartTime: function() {
      this.stopTime = Date.now()
    },
    calculateTime: function() {
      this.totalTime = this.stopTime - this.startTime
    }
  }
}


var time = newTime();
time.setStartTime();
time.setStopTime();
time.calculateTime();

// console.log(sedan.speed);
// sedan.brake();
//
// console.log(sedan.speed);
// sedan.brake();
// sedan.brake();
//
// console.log(sedan.speed);
// sedan.brake();
//
// console.log(sedan.speed);




// function timerStart(id) {
//   timer(id).startTimer()
// }
//
// function timerStop(id) {
//   timer(id).stopTimer()
// }
//
// function timer(id) {
//   return {
//     id: id,
//     timerStart: 0,
//     timerStop: 0,
//     totalTime: 0,
//     startTimer: function() {
//       this.timerStart = Date.now()
//     },
//     stopTimer: function() {
//       this.timerStop = Date.now()
//     },
//     calculateTimer: function() {
//       this.totalTime = this.timerStop - this.timerStart
//     },
//   }
// }



// get
// add
// find
// update

// function timerStart() {
//   timer.setStartTime()
// }
//
// function timerStop() {
//   timer.setStopTime()
//   console.log(timer.calculateTime());
// }
//
// var timer = {
//   startTime: 0,
//   stopTime: 0,
//   setStartTime : function timerStart() {
//     this.startTime = Date.now()
//   },
//
//   setStopTime : function timerStop() {
//     this.stopTime = Date.now()
//   },
//
//   calculateTime : function makeTimeCalculation() {
//     return this.stopTime - this.startTime
//   },
// }



// console.log('processing 2 seconds')
// setTimeout(function() {
//
//
//   console.log('done')
//
//
// }, 2000)
