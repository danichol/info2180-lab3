var click =4;

window.onload=function(){
    var btn = document.getElementsByClassName("btn")[0];
    var result = docuemnt.getElementsByID("result");
    var tile = document.getElementById("tile").children;

    for (p=0; tile.length>p; p++){
        tile[p].className = "tile";
        tile[p].addEventListener("mouseout", mouseOut);
        tile[p].addEventListener("click", piece);
        tile[p].addEventListener("mouseover",mouseOvr);
    }

    btn.addEventListener("click",resetGame);
}

function mouseOvr(){
    alrt.target.className+= ("hover");
}

function mouseOut(alert){
    alert.target.classList.remove("hover");

function piece(alert){
    if ((alert.target.innerHTML != "X")&&(alert.target.innerHTML != "O")){
        if (click == 4){
            alert.target.innerHTML = "X";
            alert.target.className += (" X ");
            click = 5;
        }
        else{
            alert.target.innerHTML = "O";
            alert.target.className += (" O ");
            click = 4;
        }
    }
    checkResult();
}


function checkResult(){
    if ((tile[0].innerHTML == "X" && tile[1].innerHTML == "X" && tile[2].innerHTML == "X")||(tile[3].innerHTML == "X" && tile[4].innerHTML == "X" && tile[5].innerHTML == "X")||(tile[6].innerHTML == "X" && tile[7].innerHTML == "X" && tile[8].innerHTML == "X")||(tile[0].innerHTML == "X" && tile[3].innerHTML == "X" && tile[6].innerHTML == "X")||(tile[1].innerHTML == "X" && tile[4].innerHTML == "X" && tile[7].innerHTML == "X")||(tile[2].innerHTML == "X" && tile[5].innerHTML == "X" && tile[8].innerHTML == "X")||(tile[2].innerHTML == "X" && tile[4].innerHTML == "X" && tile[6].innerHTML == "X")||(tile[1].innerHTML == "X" && tile[4].innerHTML == "X" && tile[8].innerHTML == "X")){
        winner.className += (" you-won ");
        winner.innerHTML = "Congratulations! X is the winner!";
    }
    else if ((tile[0].innerHTML == "O" && tile[1].innerHTML == "O" && tile[2].innerHTML == "O")||(tile[3].innerHTML == "O" && tile[4].innerHTML == "O" && tile[5].innerHTML == "O")||(tile[6].innerHTML == "O" && tile[7].innerHTML == "O" && tile[8].innerHTML == "O")||(tile[0].innerHTML == "O" && tile[3].innerHTML == "O" && tile[6].innerHTML == "O")||(tile[1].innerHTML == "O" && tile[4].innerHTML == "O" && tile[7].innerHTML == "O")||(tile[2].innerHTML == "O" && tile[5].innerHTML == "O" && tile[8].innerHTML == "O")||(tile[2].innerHTML == "O" && tile[4].innerHTML == "O" && tile[6].innerHTML == "O")||(tile[1].innerHTML == "O" && tile[4].innerHTML == "O" && tile[8].innerHTML == "O")){
        winner.className += (" you-won ");
        winner.innerHTML = "Congratulations! O is the Winner!";
    }
}

function refresh(){
    for(var t=0; tile.length>t; t++){
        tile[t].innerHTML ="";
        tile[t].classList.remove("O");
        tile[t].classList.remove("X");
    }
    result.innerHTML = "Move your mouse over a square and click to play an 'X' or an 'O'. ";
    result.classList.remove("you-won");
}
}
