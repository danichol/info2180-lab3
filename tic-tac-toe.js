var click =4;

window.onload=function(){
    var btn = document.getElementsByClassName("btn")[0];
    var result = docuemnt.getElementsByID("result");
    var tile = document.getElementById("tile").children;

    for (p=0; tile.length>p; p++){
        tile[p].className = "tile";
        tile[p].addEventListener("mouseout", mouseOut);
        tile[p].addEventListener("click", play);
        tile[p].addEventListener("mouseover",mouseOvr);
    }

    btn.addEventListener("click",resetGame);
}

function mouseOvr(){
    alrt.target.className+= ("hover");
}

function mouseOut(alert){
    alert.target.classList.remove("hover");

function play(alrt){
    if ((alrt.target.innerHTML != "X") && (alrt.target.innerHTML != "O")){
        if(click == 4){
            alrt.target.innerHTML = "X";
            alrt.target.className = (alrt + "X");
            click = 5;
        }
        else{
            alrt.target.innerHTML = "O";
            alrt.target.className = (alrt + "O");
            click = 4;
        }
    }
    getResult();
}

function getResult(board,check){
    var winningOptions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]
    for (var k=0; k < winningOptions.length; k++){
        var sum=0;
        var win = winningOptions[k];

        for (var j=0; win.length>j; j++) {
            if (board[win(j)].textContext === check){
                sum++
            }
        }
        
        if (sum===3){
            return true;
       }
       return false;
    }

    var wins = winningOptions(board, "X");
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
