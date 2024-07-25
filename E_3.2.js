function oddEvenCounter(){

    let arr = [1, 2, '*', 4, null, NaN, Boolean, 0]
    let even = 0
    let odd = 0
    let nulls = 0
    let other = 0
  
    arr.forEach(function(item, index, array) {
  
        if (typeof(item) == 'number' && !isNaN(item)) {
  
          if (item == 0) {
            nulls++
          } else if (item % 2 == 0) {
            even++
          } else {
            odd++
          }
          
        } else {
          other++
        }
  
        
    })
  
    console.log(` Четных: ${even}, Нечетных: ${odd}, Нулей: ${nulls}, Другие элементы: ${other}`)
  
  }
  oddEvenCounter()