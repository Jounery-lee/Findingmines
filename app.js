const safe = document.querySelectorAll(".safe")

console.log(safe[1]);
console.log(safe[2]);
console.dir(window);

function die(){
  alert('당신은 죽었습니다. 게임을 다시 시작합니다.');
};
function good(){

  alert("다음 박스를 선택하세요.")
};

function pushbutton(){

  const i = Math.round(Math.random()*9);
  if(i < 5){
    alert('당신은 죽었습니다. 게임을 다시 시작합니다.');
    this.src='mine.png';
    //this! 이게 바로 해결책. 바뀔때마다 하는게 아니고
    //여기로! 하면 되는것이었음.
    window.location.reload()
  }else{
    alert("다음 박스를 선택하세요.")
    this.src='white.png';
    //this! 이게 바로 해결책. 바뀔때마다 하는게 아니고
    //여기로! 하면 되는것이었음.
  }
}

safe[0].addEventListener("click", pushbutton);
safe[1].addEventListener("click", pushbutton);
safe[2].addEventListener("click", pushbutton);
safe[3].addEventListener("click", pushbutton);
safe[4].addEventListener("click", pushbutton);
safe[5].addEventListener("click", pushbutton);
safe[6].addEventListener("click", pushbutton);
safe[7].addEventListener("click", pushbutton);
safe[8].addEventListener("click", pushbutton);
