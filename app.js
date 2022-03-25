const boom = document.querySelector("#boom");
const safe = document.querySelectorAll(".safe")


console.log(boom);
console.log(safe[1]);
console.log(safe[2]);

function die(){
  boom.src='mine.png';
  alert('You are dead');
}
function good(){
  //this! 이게 바로 해결책. 바뀔때마다 하는게 아니고
  //여기로! 하면 되는것이었음.
  this.src='white.png';
  alert("OK What's next?")
};
boom.addEventListener("click", die);
safe[0].addEventListener("click", good);
safe[1].addEventListener("click", good);
safe[2].addEventListener("click", good);
safe[3].addEventListener("click", good);
safe[4].addEventListener("click", good);
safe[5].addEventListener("click", good);
safe[6].addEventListener("click", good);
safe[7].addEventListener("click", good);
