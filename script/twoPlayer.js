player1= 0;

player2=0;

var player1_score=0; 

var player2_score=0; 


window.addEventListener("keydown", function (event) {

    const score=document.getElementById("score"); 

    const winner=document.getElementById("winner"); 

    if (event.defaultPrevented) {

      return; 
    }
    switch (event.key) {

      case "ArrowUp":

        player2=2;

        console.log("UP");

        break;

      case "ArrowLeft":

        player2=1;

        console.log("LEFT");

      break;

      case "ArrowRight":

        player2=3;

        console.log("RIGHT");

        break;

      case "a":

        player1=1;

        console.log("A");

        break;

      case "s":

        player1=2;

        console.log("S");

        break;

      case "d":

        player1=3;

        console.log("D");

        break;
    } 

    console.log(`Player1: ${player1} | Player2: ${player2}`);
    
    if (player1!=0 && player2!=0){

        if(player1==1){

            if(player2==1){

                winner.innerText="DRAW";

                winner.classList="text-warning";
                
                player2_score++;

                player1_score++;

            } else if(player2==2){

                winner.innerText="PLAYER 2 WIN";

                winner.classList="text-danger";

                player2_score++;

            } else if(player2==3){

                winner.innerText="PLAYER 1 WIN";

                winner.classList="text-info";

                player1_score++;
            }
        } else if (player1==2) {

            if(player2==2){

                winner.innerText="DRAW";

                winner.classList="text-warning";

                player2_score++;

                player1_score++;

            } else if(player2==3){

                winner.innerText="PLAYER 2 WIN";

                winner.classList="text-danger";

                player2_score++;

            } else if(player2==1){

                winner.innerText="PLAYER 1 WIN";

                winner.classList="text-info";

                player1_score++;
            }
        } else if (player1==3){

            if(player2==3){

                winner.innerText="DRAW";

                winner.classList="text-warning";

                player2_score++;
                
                player1_score++;

            } else if(player2==1){

                winner.innerText="PLAYER 2 WIN";

                winner.classList="text-danger";

                player2_score++;

            } else if(player2==2){

                winner.innerText="PLAYER 1 WIN";

                winner.classList="text-info";

                player1_score++;
            }
        }
        score.innerText=`Player1 : ${player1_score} | PLayer2 : ${player2_score}`;

        player1= 0;

        player2=0;
    }

    event.preventDefault();

  }, true);