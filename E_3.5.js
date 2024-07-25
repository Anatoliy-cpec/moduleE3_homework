function highFunc(num1) {

    return function(num2) {
        return +num1 + +num2
    }
  
  }
  
  f2 = highFunc(3)
  
  console.log(f2(3))
