function timer(a, b) {
    let seconds = 0
    timerId = setInterval(function () {
      console.log(a)
      a++
      if (a > b) {
        clearTimeout(timerId)
      }
    }, 1000, a, b)
  }
  
  timer(1, 5)