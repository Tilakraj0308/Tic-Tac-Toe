var isX = true;
// i = -1;
count = 0;
temp = $(".p-2");
function fill(e){
    // temp = document.getElementsByClassName("p-2");
    isfill = true;
    if (temp[e].innerHTML == ""){
        isfill = false;
      }
    if(isX && !isfill){
        temp[e].innerHTML = "<b>X</b>";
        isX = false;
        count++;
        // $.delay(300);
        // iswin();
        if(iswin()){
            setTimeout(()=>{
                alert("X won");
            } , 200);
        }
        else if(count == 9){
            setTimeout(()=>{
                alert("draw");
            } , 200);
        }
    }
    else if(!isX && !isfill){
        temp[e].innerHTML = "<b>O</b>";
        isX = true;
        count++;
        // $.delay(300);
        // iswin();
        if(iswin()){
            setTimeout(()=>{
                alert("O won");
            } , 200);
        }
        else if(count == 9){
            setTimeout(()=>{
                alert("draw");
            } , 200);
        }
    }
    // if(count == 9)
    // console.log("Draw");
}
function checkd1(){
    til = temp[0].innerHTML;
    if(temp[4].innerHTML == til && temp[8].innerHTML == til)
        return(Boolean(1));
    else
        return(Boolean(0));
}
function checkd2(){
    til = temp[2].innerHTML;
    if(temp[4].innerHTML == til && temp[6].innerHTML == til)
        return(Boolean(1));
    else
        return(Boolean(0));
}
function check_row(i){
    til = temp[i].innerHTML;
    if(temp[i+1].innerHTML == til && temp[i+2].innerHTML == til)
        return(Boolean(1));
    else
        return(Boolean(0));
}
function check_col(i){
    til = temp[i].innerHTML;
    if(temp[i+3].innerHTML == til && temp[i+6].innerHTML == til)
        return(Boolean(1));
    else
        return(Boolean(0));
}
function iswin(){
    var won = false;
    for (let i = 0; i < 3; i++) {
        if(temp[i].innerHTML == "")
            continue;
        // if(temp[i].innerHTML!=null){
        else{
            if(i == 0)
                won = won||checkd1();
            if(i == 2)
                won = won || checkd2();
            won = won || check_col(i);
        }
      }
      for (let i = 0; i < 7; i+= 3) {
          if(temp[i].innerHTML == "")
            continue;
        else{
        // if(temp[i].innerHTML!=null){
            if(i == 0)
                won = won||checkd1();
            won = won || check_row(i);
        }
    }
    // if(won){
    //     console.log("Someone won")
    // }
    return won;
}

