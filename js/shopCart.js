/*
 * @Description: 
 * @Author: PEL1M
 * @Date: 2022-12-15 15:49:07
 * @LastEditTime: 2022-12-19 15:23:36
 * @LastEditDevice: PEL1M's MacBook Pro 
 */

// 购物车商品数量加减

const quantity = document.getElementById("quantity");
const quantity2 = document.getElementById("quantity2");
const quantity3 = document.getElementById("quantity3");

function plus() {
    quantity.value = parseInt(quantity.value) + 1;
    const a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value)
    const sl = document.getElementById("sl");
    sl.innerHTML = a
    // console.log(a)
    const zj = document.getElementById("zj");
    const b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80
    zj.innerHTML = b

}
function plus2() {
    quantity2.value = parseInt(quantity2.value) + 1;
    const a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value)
    const sl = document.getElementById("sl");
    sl.innerHTML = a
    console.log(a)
    const zj = document.getElementById("zj");
    const b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80
    zj.innerHTML = b
}
function plus3() {
    quantity3.value = parseInt(quantity3.value) + 1;
    const a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value)
    const sl = document.getElementById("sl");
    sl.innerHTML = a
    console.log(a)
    const zj = document.getElementById("zj");
    const b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80
    zj.innerHTML = b
}
function minus() {
    if (quantity.value <= 1) {
        quantity.value = 1;
    } else {
        quantity.value = parseInt(quantity.value) - 1;
    }
    const a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value)
    const sl = document.getElementById("sl");
    sl.innerHTML = a
    console.log(a)
    const zj = document.getElementById("zj");
    const b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80
    zj.innerHTML = b
}
function minus2() {
    if (quantity2.value <= 1) {
        quantity2.value = 1;
    } else {
        quantity2.value = parseInt(quantity2.value) - 1;
    }
    const a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value)
    const sl = document.getElementById("sl");
    sl.innerHTML = a
    console.log(a)
    const zj = document.getElementById("zj");
    const b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80
    zj.innerHTML = b
}
function minus3() {
    if (quantity3.value <= 1) {
        quantity3.value = 1;
    } else {
        quantity3.value = parseInt(quantity3.value) - 1;
    }
    const a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value)
    const sl = document.getElementById("sl");
    sl.innerHTML = a
    console.log(a)
    const zj = document.getElementById("zj");
    const b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80
    zj.innerHTML = b
}

// 计算购物车物品总数总价
window.onload = function () {
    const quantity3 = document.getElementById("quantity3");
    const quantity2 = document.getElementById("quantity2");
    const quantity = document.getElementById("quantity");
    const a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value)
    const sl = document.getElementById("sl");
    sl.innerHTML = a
    console.log(a)
    const zj = document.getElementById("zj");
    const b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80
    zj.innerHTML = b
}


// 购物车删除商品
function delete1() {
    $("#del1").css("display", "none");
    console.log("user del 1 ")
}

function delete2() {
    $("#del2").css("display", "none");
    console.log("user del 2 ")
}

function delete3() {
    $("#del3").css("display", "none");
    console.log("user del 3 ")
}

// 删除商品计算件数总价
setInterval(count, 100)
function count() {
    // 1a2a3a
    if ($("#del1").css("display") == "none" && $("#del2").css("display") == "none" && $("#del3").css("display") == "none") {
        quantity.value = 0;
        quantity2.value = 0;
        quantity3.value = 0;
        a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value);
        b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80;
        $("#sl")[0].innerHTML = a;
        $("#zj")[0].innerHTML = b;
        console.log(b);
        console.log(a);
    }
    // 1b2a3a 
    else if ($("#del1").css("display") !== "none" && $("#del2").css("display") == "none" && $("#del3").css("display") == "none") {
        quantity2.value = 0;
        quantity3.value = 0;
        a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value);
        b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80;
        $("#sl")[0].innerHTML = a;
        $("#zj")[0].innerHTML = b;
        console.log(b);
        console.log(a);
    }
    // 1b2b3a
    else if ($("#del1").css("display") !== "none" && $("#del2").css("display") !== "none" && $("#del3").css("display") == "none") {
        quantity3.value = 0;
        a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value);
        b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80;
        $("#sl")[0].innerHTML = a;
        $("#zj")[0].innerHTML = b;
        console.log(b);
        console.log(a);
    }
    // 1b2b3b
    else if ($("#del1").css("display") !== "none" && $("#del2").css("display") !== "none" && $("#del3").css("display") !== "none") {
        // quantity3.value = 0;
        a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value);
        b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80;
        $("#sl")[0].innerHTML = a;
        $("#zj")[0].innerHTML = b;
        console.log(b);
        console.log(a);
    }
    // 1a2b3a
    else if ($("#del1").css("display") == "none" && $("#del2").css("display") !== "none" && $("#del3").css("display") == "none") {
        quantity.value = 0;
        quantity3.value = 0;
        a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value);
        b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80;
        $("#sl")[0].innerHTML = a;
        $("#zj")[0].innerHTML = b;
        console.log(b);
        console.log(a);
    }
    // 1a2b3b
    else if ($("#del1").css("display") == "none" && $("#del2").css("display") !== "none" && $("#del3").css("display") !== "none") {
        quantity.value = 0;
        a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value);
        b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80;
        $("#sl")[0].innerHTML = a;
        $("#zj")[0].innerHTML = b;
        console.log(b);
        console.log(a);
    }
    // 1a2a3b
    else if ($("#del1").css("display") == "none" && $("#del2").css("display") == "none" && $("#del3").css("display") !== "none") {
        quantity.value = 0;
        quantity2.value = 0;
        a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value);
        b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80;
        $("#sl")[0].innerHTML = a;
        $("#zj")[0].innerHTML = b;
        console.log(b);
        console.log(a);
    }
    // 1b2a3b
    else if ($("#del1").css("display") !== "none" && $("#del2").css("display") == "none" && $("#del3").css("display") !== "none") {
        quantity2.value = 0;
        a = parseInt(quantity3.value) + parseInt(quantity2.value) + parseInt(quantity.value);
        b = parseInt(quantity.value) * 100 + parseInt(quantity2.value) * 20 + parseInt(quantity3.value) * 80;
        $("#sl")[0].innerHTML = a;
        $("#zj")[0].innerHTML = b;
        console.log(b);
        console.log(a);
    }
    else { }
}

// 全选全不选
let select = document.getElementsByName("select");
let length = select.length;

function setStatus(status) {
    for(let i = 0; i < length; i++) {
        select[i].checked = status;
    }
}

$("#selAll").click(function() {
    setStatus(this.checked)
})
$("#selAll2").click(function() {
    setStatus(this.checked)
})

function checkStatus() {
    for(let j = 0; j < length; j++){
        if(!select[j].checked) {
            return false;
        }
    }
    return true;
}

