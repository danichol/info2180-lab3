var click =4;
var btn;
var result;
var tile;

window.onload=function(){
    btn = document.getElementsByClassName("btn")[0];
    result = docuemnt.getElementsByID("result");
    tile = document.getElementById("tile").children;

    for (p=0; p<tile.length; p++){
        tile[p].className = "tile";
        tile[p].addEventListener("mouseout", mouseOut);
        tile[p].addEventListener("click", piece);
        tile[p].addEventListener("mouseover",mouseOvr);
    }

    btn.addEventListener("click",resetGame);
}

function piece(al){
    if ((al.target.innerHTML != "X")&&(al.target.innerHTML != "O")){
        if (click == 4){
            al.target.innerHTML = "X";
            al.target.className += (" X ");
            click = 5;
        }
        else{
            al.target.innerHTML = "O";
            al.target.className += (" O ");
            click = 4;
        }
    }
    checkResult();
}

function mouseOvr(){
    al.target.className+= ("hover");
}

function mouseOut(alert){
    al.target.classList.remove("hover");


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

function resetGame(){
    for(var t=0; t<tile.length; t++){
        tile[t].innerHTML ="";
        tile[t].classList.remove("O");
        tile[t].classList.remove("X");
    }
    result.innerHTML = "Move your mouse over a square and click to play an 'X' or an 'O'. ";
    result.classList.remove("you-won");
}
}