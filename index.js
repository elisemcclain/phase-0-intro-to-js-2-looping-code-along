let names = ["Guadalupe", "Ollie", "Aki"]
let event = ["surprise"]

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  
  function countDown(n) {
    let i = 10
        while (i >= 0) {
       console.log(i)
       i--
  }
return n
}
countDown(n)
