function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player_score=0; 

var computer_score=0; 

const player = document.getElementById("player");

player.addEventListener("click",(e)=>{

    e.preventDefault();

    const paper= document.getElementById("paper"); 

    const scissor= document.getElementById("scissor"); 

    const rock= document.getElementById("rock"); 

    const randomNumber = getRandomNumber(1, 3); 

    const imgpc=document.getElementById("comp"); 

    const pctex=document.getElementById("pctex"); 

    const score=document.getElementById("score"); 

    const winner=document.getElementById("winner"); 

    const note =document.getElementById("note");

    if (paper.checked || rock.checked || scissor.checked){

        switch(randomNumber) {
            
            case 1:
                imgpc.src=".././assets/images/paper.png";
                pctex.innerText="Computer - Paper";
            break;

            case 2:
                imgpc.src=".././assets/images/scissor.png";
                pctex.innerText="Computer - Scissor";
            break;

            case 3:
                imgpc.src=".././assets/images/rock.png";
                pctex.innerText="Computer - Rock";
            break;
        } 

        note.innerHTML="";

        player.value="Play Again";
    }

    if(paper.checked){

        if(randomNumber==1){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            computer_score++;
            player_score++;

        } else if(randomNumber==2){
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            computer_score++;

        } else if(randomNumber==3){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            player_score++;

        }
    } else if (scissor.checked) {

        if(randomNumber==2){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            computer_score++;
            player_score++;

        } else if(randomNumber==3){
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            computer_score++;

        } else if(randomNumber==1){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            player_score++;

        }
    } else if (rock.checked){

        if(randomNumber==3){
            winner.innerText="DRAW";
            winner.classList="text-warning";
            computer_score++;
            player_score++;

        } else if(randomNumber==1){
            winner.innerText="COMPUTER WIN";
            winner.classList="text-danger";
            computer_score++;

        } else if(randomNumber==2){
            winner.innerText="PLAYER WIN";
            winner.classList="text-success";
            player_score++;

        }
    } else if(!(paper.checked) && !(rock.checked) && !(scissor.checked)){

        note.innerHTML="*Please Select The Option";

        imgpc.src=".././assets/images/Question Mark.png";

        winner.innerText="Who Will Win??";
        
        winner.classList="";
    }
    score.innerText=`Computer: ${computer_score} | Player: ${player_score}`;

    rock.checked=false;

    scissor.checked=false;

    paper.checked=false;
});
