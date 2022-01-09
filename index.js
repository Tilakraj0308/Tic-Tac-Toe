var isX = true;
count = 0;
temp = $(".p-2");
var player1;
var player2;
isauto = true;
tempboard = ["", "", "", "", "", "", "", "", ""];

// For auto play------------------
function autofill() {
    a = goingwin();
    if (a == -1) {
        a = goinglose();
    }
    if (a == -1) {
        a = random();
        while (tempboard[a] != "") {
            a = random();
        }
    }
    console.log(a);
    temp[a].innerHTML = "<b>O</b>";
    tempboard[a] = "O";
}

function random() {
    var ran = Math.floor(Math.random() * 9);
    return ran;
}

function goingwin() {
    var wincheck = 0;
    while (wincheck < 9) {
        store = tempboard[wincheck];
        if (store == "") {
            tempboard[wincheck] = "O";
            if (iswin_2()) {
                tempboard[wincheck] = store;
                return wincheck;
            }
        }
        tempboard[wincheck] = store;
        wincheck++;
    }
    // console.log("Haha" + wincheck);
    return -1;
}

function goinglose() {
    var losecheck = 0;
    while (losecheck < 9) {
        store = tempboard[losecheck];
        if (store == "") {
            tempboard[losecheck] = "X";
            if (iswin_2()) {
                tempboard[losecheck] = store;
                return losecheck;
            }
        }
        tempboard[losecheck] = store;
        losecheck++;
    }
    return -1;
}

function checkd1_2() {
    til = tempboard[0];
    if (tempboard[4] == til && tempboard[8] == til) {
        return true
    }
    else
        return false
}
function checkd2_2() {
    til = tempboard[2];
    if (tempboard[4] == til && tempboard[6] == til) {
        return true
    }
    else
        return false
}
function check_row_2(i) {
    til = tempboard[i];
    if (tempboard[i + 1] == til && tempboard[i + 2] == til) {
        return true
    }
    else
        return false
}
function check_col_2(i) {
    til = tempboard[i];
    if (tempboard[i + 3] == til && tempboard[i + 6] == til) {
        return true
    }
    else
        return false
}
function iswin_2() {
    var won = false;
    for (let i = 0; i < 3; i++) {
        if (tempboard[i] == "")
            continue;
        else {
            if (i == 0)
                won = won || checkd1_2();
            if (i == 2)
                won = won || checkd2_2();
            won = won || check_col_2(i);
        }
    }
    for (let i = 0; i < 7; i += 3) {
        if (tempboard[i] == "")
            continue;
        else {
            if (i == 0)
                won = won || checkd1_2();
            won = won || check_row_2(i);
        }
    }
    return won;
}


//-------------------------

function fill(e) {
    isfill = true;
    if (temp[e].innerHTML == "") {
        isfill = false;
    }
    if (!isauto) {
        if (isX && !isfill) {
            temp[e].innerHTML = "<b>X</b>";
            tempboard[e] = "X";
            isX = false;
            count++;
            if (iswin()) {
                setTimeout(() => {
                    if (confirm((player1 == undefined ? "X" : player1) + " won!!!\nDo you wanna play again?"))
                        window.location.reload()
                    else
                        window.close()
                }, 200);
            }
            else if (count == 9) {
                setTimeout(() => {
                    if (confirm("It's a Draw!!!\nDo you wanna play again?"))
                        window.location.reload()
                    else
                        window.close()
                }, 200);
            }
        }
        else if (!isX && !isfill) {
            temp[e].innerHTML = "<b>O</b>";
            tempboard[e] = "O";
            isX = true;
            count++;
            if (iswin()) {
                setTimeout(() => {
                    if (confirm((player2 == undefined ? "O" : player2) + " won!!!\nDo you wanna play again?"))
                        window.location.reload()
                    else
                        window.close()
                }, 200);
            }
            else if (count == 9) {
                setTimeout(() => {
                    if (confirm("It's a Draw!!!\nDo you wanna play again?"))
                        window.location.reload()
                    else
                        window.close()
                }, 200);
            }
        }
    }
    else {
        if (!isfill) {
            temp[e].innerHTML = "<b>X</b>";
            tempboard[e] = "X";
            isX = false;
            count++;
            // console.log(tempboard);
            if (iswin()) {
                setTimeout(() => {
                    if (confirm("X  won!!!\nDo you wanna play again?"))
                        window.location.reload()
                    else
                        window.close()
                }, 200);
                isX = true;
            }
            else if (count == 9) {
                setTimeout(() => {
                    if (confirm("It's a Draw!!!\nDo you wanna play again?"))
                        window.location.reload()
                    else
                        window.close()
                }, 200);
            }
            // }
            // else{
            if (count != 9 && !isX) {
                autofill();
                isX = true;
                count++;
                // console.log(tempboard);
                // isX = true;
                if (iswin()) {
                    setTimeout(() => {
                        if (confirm("computer won!!!\nDo you wanna play again?"))
                            window.location.reload()
                        else
                            window.close()
                    }, 200);
                }
                else if (count == 9) {
                    setTimeout(() => {
                        if (confirm("It's a Draw!!!\nDo you wanna play again?"))
                            window.location.reload()
                        else
                            window.close()
                    }, 200);
                }
            }
        }
    }
}
function checkd1() {
    til = temp[0].innerHTML;
    if (temp[4].innerHTML == til && temp[8].innerHTML == til) {
        changecol(0, 4, 8);
        return true
    }
    else
        return false
}
function checkd2() {
    til = temp[2].innerHTML;
    if (temp[4].innerHTML == til && temp[6].innerHTML == til) {
        changecol(2, 4, 6);
        return true
    }
    else
        return false
}
function check_row(i) {
    til = temp[i].innerHTML;
    if (temp[i + 1].innerHTML == til && temp[i + 2].innerHTML == til) {
        changecol(i, i + 1, i + 2);
        return true
    }
    else
        return false
}
function check_col(i) {
    til = temp[i].innerHTML;
    if (temp[i + 3].innerHTML == til && temp[i + 6].innerHTML == til) {
        changecol(i, i + 3, i + 6);
        return true
    }
    else
        return false
}
function iswin() {
    var won = false;
    for (let i = 0; i < 3; i++) {
        if (temp[i].innerHTML == "")
            continue;
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
            if (i == 0)
                won = won || checkd1();
            won = won || check_row(i);
        }
    }
    return won;
}
function changecol(a, b, c) {
    $(temp[a]).css("color", "green");
    $(temp[b]).css("color", "green");
    $(temp[c]).css("color", "green");
}

$(document).ready(function () {
    $("#staticBackdrop").modal("show");
    $("#close-btn").click(function () {
        $("#staticBackdrop").modal("hide");
    });
    $("#modal-form").submit(function (e) {
        e.preventDefault()
        player1 = $("#player-1").val()
        player2 = $("#player-2").val()
        isauto = false;
        $("#staticBackdrop").modal("hide");
        $("#vs").text(`${player1}(X) VS ${player2}(O)`)
    });
})