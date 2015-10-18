/**
 * Understanding Timers: setTimeout and setInterval
 *
 * Browser provides a built-in scheduler which allows to setup function calls for execution after given period of time.
 *
 * setInterval() schedules the repeating execution after every delay microseconds. It can be stopped by clearInterval call.
 *
 * Gotchas:
 * - Interesting things start to happen when func takes more than the delay. If the execution is impossible, it is queued.
 * Only one execution can be queued.
 * Thus, setInterval(func, delay) does not guarantee a given delay between executions.
 * There are cases when the real delay is more or less than given. In fact, it doesn’t guarantee that there be any delay at all.
 *
 * - Functions executed by setInterval/setTimeout have this = window, or this = undefined in ES5 strict mode.
 *
 * @Reference: http://javascript.info/tutorial/settimeout-setinterval
 */

(function () {
  // setTimeout()
  function f() {
    alert('Hi');
  }

  setTimeout(f, 1000);

  // Cancelling the execution
  var timerId = setTimeout(function () {
    alert(1)
  }, 1000);
  clearTimeout(timerId);


  // Exercise: Create the clock using setInterval()
  (function () {
    // HTML
    //<div id="clock">
    //  <span id="hour">hh</span>:<span id="min">mm</span>:<span id="sec">ss</span>
    //</div>

    var timerId;

    function clockStart() {
      if (timerId) return;

      // setInterval does not promise any real execution delay. So every update creates a brand new Date object and uses it to update the clock.
      timerId = setInterval(update, 1000);
      update(); // Called right away so that user doesn't need to wait 1000ms for the start.
    }

    function clockStop() {
      clearInterval(timerId);
      timerId = null;
    }

    function update() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) {
        hours = '0' + hours;
      }
      document.getElementById('hour').innerHTML = hours;

      var minutes = date.getMinutes();
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      document.getElementById('min').innerHTML = minutes;

      var seconds = date.getSeconds();
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      document.getElementById('sec').innerHTML = seconds
    }

    // init clock
    clockStart();
  })();

  // Repeating with known delay
  // When we need a fixed delay, rescheduling with setTimeout is used.
  // Here is the example which gives alert every two seconds with setTimeout instead of setInterval:


  (function () {
    var i = 1;
    var timer = setTimeout(function () {
      alert(i++);
      timer = setTimeout(arguments.callee, 2000);
    }, 2000)
  })();

})();