function primeNumbers(number) {

    if (typeof(number) == 'number' && !isNaN(number) ) {
  
      nextPrime:
        for (var i = 2; i <= number; i++) {
          for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
          }
          console.log(i);
        }
  
    } else if (number > 1000){
        alert('Число должно быть меньше 1000')} 
      else {
        alert('Неверно введены данные')
    }}
  
  primeNumbers(500) 