// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
document.querySelector('div#modal').setAttribute('hidden', 'hidden');

// Your JavaScript code goes here!
let hearts = document.querySelectorAll('.like-glyph');

function changeHeart (){
  if (hearts.textContext === EMPTY_HEART){
    hearts.textContext = FULL_HEART;
    hearts.className = 'activated-heart'
  }else{
    hearts.textContext === EMPTY_HEART
    hearts.className = ''
  }
}



heart.addEventListener('click',mimicServerCall())
.then(re => re.forEach(heart => changeHeart(heart))).catch((error=> document.querySelector('div').removeAttribute('hidden')))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
