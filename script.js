let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true; // playerX , player0

let winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() => {
      turn0 = true;
      enableBoxes();
      msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
box.addEventListener("click", () => {
    // box ab click hoga to console me dikhayega ki box is clicked
  if (turn0 === true){
    box.innerText ="O";
    turn0 = false;
   
  }
   else{
    box.innerText ="X";
    turn0 = true;
   }
   
   box.disabled = true; // ye ni hoga to ek button ko dubara dbane p change ho jayega
   checkWinner();
 });

});

const disableBoxes = () => { // game khtm hone ke bad btn kam ni kare
    for(let box of boxes){
        box.disabled = true;
    }
};
  
const enableBoxes = () => { // new game ho tab enable ho jaye dubara se button sab
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `winner-winner chicken dinner, winner is ` +(winner);
    msgContainer.classList.remove("hide");
    disableBoxes(); // call
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
         
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);

            }
        }

    } 

}
 
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
