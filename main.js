let head = document.getElementById("head");
let span = document.getElementById("span");
let box = [];

function easy(n1,n2,n3) {
    head.innerHTML = `${box[n1]} WINNER`;
    setInterval(function(){ head.innerHTML += '.'} , 1000);
    setInterval(function(){ location.reload()} , 3000);
}

function winner() {
    for(let i = 1 ; i <= 9 ; i++)
        {
        box[i] = document.getElementById('box' + i).innerHTML;
        }
      if   (box[1] == box[2] && box[2] == box[3] && box[1] != '')
        {
            easy(1,2,3);
        }
    else if ( box[4] == box[5] && box[5] == box[6] && box[4] != '')    
        {
            easy(4,5,6);
        }
    else if ( box[7] == box[8] && box[8] == box[9] && box[7] != '')    
        {
            easy(7,8,9);
        }
    else if ( box[1] == box[4] && box[4] == box[7] && box[4] != '')    
        {
            easy(1,4,7);
        }
    else if ( box[2] == box[5] && box[5] == box[8] && box[2] != '')    
        {
            easy(2,5,8);
        }
    else if ( box[3] == box[6] && box[6] == box[9] && box[3] != '')    
        {
            easy(3,6,9);
        }
    else if ( box[1] == box[5] && box[5] == box[9] && box[1] != '')    
        {
            easy(1,5,9);
        }
    else if ( box[3] == box[5] && box[5] == box[7] && box[3] != '')    
        {
            easy(3,5,7);
        }
    else if ( box[1] != '' && box[2] != '' && box[3] != '' && box[4] != '' &&
              box[5] != '' && box[6] != '' && box[7] != '' && box[8] != '' && box[9] != '' )    
        {
            head.innerHTML = `No winner playing again`;
            setInterval(function(){ head.innerHTML += '.'} , 1000);
            setInterval(function(){ location.reload()} , 3000);
        }  
}

let check = "o";

function game(id) {
    let ele = document.getElementById(id);
    if(check === "x" && ele.innerHTML == ""){
        ele.style = "background:#fff ; color: cornflowerblue";
        head.innerHTML = "PLAYER - O";
        span.style = "color : blue";
        ele.innerHTML = "X";
        check = "o";
        }
        else if (check === "o" && ele.innerHTML == "") {
        ele.style = "background:#ff0061";
        head.innerHTML = "PLAYER - X";
        ele.innerHTML = "O";
        check = "x";
    }
    winner();
}