// $(() => {
var isX = true;
count = 0;
var record = new Array(9);
temp = $(".p-2");
var player1;
var player2;

function fill(e) {
    // temp = document.getElementsByClassName("p-2");
    isfill = true;
    if (temp[e].innerHTML == "") {
        isfill = false;
    }
    if (isX && !isfill) {
        temp[e].innerHTML = "<b>X</b>";
        isX = false;
        record[count] = e;
        count++;
        // $.delay(300);
        // iswin();
        if (iswin()) {
            changecol(record[count - 1], record[count - 3], record[count - 5]);
            setTimeout(() => {
                changecol(0, 1, 2)
                // alert("X won");
                if (confirm((player1==undefined? "X" : player1) + " won!!!\nDo you wanna play again?"))
                    fresh();
                else
                    window.close()
            }, 200);
        }
        else if (count == 9) {
            setTimeout(() => {
                // alert("draw");
                if (confirm("It's a Draw!!!\nDo you wanna play again?"))
                    fresh();
                else
                    window.close()
            }, 200);
        }
    }
    else if (!isX && !isfill) {
        temp[e].innerHTML = "<b>O</b>";
        isX = true;
        record[count] = e;
        count++;
        // iswin();
        if (iswin()) {
            changecol(record[count - 1], record[count - 3], record[count - 5]);
            setTimeout(() => {
                // alert("O won");
                if (confirm((player2==undefined? "O" : player2)  + " won!!!\nDo you wanna play again?"))
                    fresh();
                else
                    window.close()
            }, 200);
        }
        else if (count == 9) {
            setTimeout(() => {
                // alert("draw");
                if (confirm("It's a Draw!!!\nDo you wanna play again?"))
                    fresh();
                else
                    window.close()
            }, 200);
        }
    }
}
function checkd1() {
    til = temp[0].innerHTML;
    if (temp[4].innerHTML == til && temp[8].innerHTML == til)
        return true
    else
        return false
}
function checkd2() {
    til = temp[2].innerHTML;
    if (temp[4].innerHTML == til && temp[6].innerHTML == til)
        return true
    else
        return false
}
function check_row(i) {
    til = temp[i].innerHTML;
    if (temp[i + 1].innerHTML == til && temp[i + 2].innerHTML == til)
        return true
    else
        return false
}
function check_col(i) {
    til = temp[i].innerHTML;
    if (temp[i + 3].innerHTML == til && temp[i + 6].innerHTML == til)
        return true
    else
        return false
}
function iswin() {
    var won = false;
    for (let i = 0; i < 3; i++) {
        if (temp[i].innerHTML == "")
            continue;
        // if(temp[i].innerHTML!=null){
        else {
            if (i == 0)
                won = won || checkd1();
            if (i == 2)
                won = won || checkd2();
            won = won || check_col(i);
        }
    }
    for (let i = 0; i < 7; i += 3) {
        if (temp[i].innerHTML == "")
            continue;
        else {
            // if(temp[i].innerHTML!=null){
            if (i == 0)
                won = won || checkd1();
            won = won || check_row(i);
        }
    }
    // if(won){
    //     console.log("Someone won")
    // }
    return won;
}
function changecol(a, b, c) {
    $(temp[a]).css("color", "green");
    $(temp[b]).css("color", "green");
    $(temp[c]).css("color", "green");
}
function fresh() {
    for (let i = 0; i < 9; i++) {
        temp[i].innerHTML = "";
        $(temp[i]).css("color", "white");
    }
    count = 0;
    isX = true;
}
$(document).ready(function () {
    $("#staticBackdrop").modal("show");
    $("#close-btn").click(function () {
        // window.opener = self;
        // window.open('', '_blank', '').close();
        // window.closeAll();
        $("#staticBackdrop").modal("hide");
    });
    $("#modal-form").submit(function (e) {
        e.preventDefault()
        player1 = $("#player-1").val()
        player2 = $("#player-2").val()
        console.table({ player1, player2 })
        $("#staticBackdrop").modal("hide");
        $("#vs").text(`${player1}(X) VS ${player2}(O)`)
    });
})