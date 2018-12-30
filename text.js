//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input)  {

    for ( let i = 0; i < input.length; i++) {
      for ( let j = i + 1; j < input.length; j++ ) {
        if (input[i] === input[j]) {
          return input[i]
        }
      }    
    }
    return undefined
  }
  
  function firstRecurringCharacter2(input) {
    const map = {}
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]]) { //can also do map[input[i]] === undefined
        return input[i]
      } else {
        map[input[i]] = true
      }
    }
    return undefined
  }

  //alternate
  let recurring = (arr) => {
    const keySet = new Set();
    for(let i = 0; i < arr.length; i++){
        if (keySet.has(arr[i])){
            return arr[i]
            break
        }
        keySet.add(arr[i])
    }
    return undefined
}
 
  
  firstRecurringCharacter2([2,5,5,2,3,5,1,2,4])
  // firstRecurringCharacter2([8,0,7,2,3,5,1,8,4])
  // firstRecurringCharacter([2,3,4,5])
  
  
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2