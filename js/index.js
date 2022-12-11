//获取元素节点
let hotWord = document.querySelector('.hot-word');
let list = document.querySelector('.list');

//切换输入框的关键字
(function () {
    let hotWords = ['苹果手机', '家用电器', '电脑', '女鞋', '户外', '显示器', '图书', '教育', '电子书'];
    let index = 0;//表示数组下标
    //设置HTML的标准属性：元素节点.属性="属性值"
    setInterval(function () {
        index++;
        //范围校验
        if (index > hotWords.length - 1) {
            index = 0;
        }
        //设置placeholder属性
        hotWord.placeholder = hotWords[index];
    }, 3000);
})();

//模糊查询
//input当内容发生改变触发
//change当内容确定改变触发
let listArr = ['苹果手机', '华为手机', '小米手机', '魅族手机', '三星手机', '苹果13', '苹果12', '苹果13 pro', '苹果手表'];
hotWord.oninput = function () {
    //清空div
    list.innerHTML = '';
    //获取input的value值
    let value = hotWord.value;
    //和数组元素对比
    for (let i = 0; i < listArr.length; i++) {
        //在数组元素中查找value值
        if (listArr[i].indexOf(value) !== -1) {
            //添加到div中
            list.innerHTML = list.innerHTML + `<p>${listArr[i]}</p>`;
            //显示div
            list.style.display = 'block';
        }
    }
}
//失去焦点
hotWord.onblur = function () {
    //隐藏div
    list.style.display = 'none';
}

//轮播图
let img = document.getElementById('img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let lis = document.querySelectorAll('.banner-btn>li');
let slideBanner = document.querySelector('.slide-banner');
let imgArr = ['1.jpg', '2.webp', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
let i = 0;

//封装切换的函数
function banner() {
    //清空样式
    for (let k = 0; k < lis.length; k++) {
        lis[k].className = '';
    }
    //设置图片的路径
    img.src = 'images/' + imgArr[i];
    //设置点的样式
    lis[i].className = 'btn-active';
}

//封装自动切换的函数
function autoBanner() {
    i++;
    if (i > imgArr.length - 1) {
        i = 0;
    }
    banner();
}

let timer = setInterval(autoBanner, 3000);
//鼠标移入停止定时器
slideBanner.onmouseover = function () {
    clearInterval(timer);
}
//鼠标离开开启定时器
slideBanner.onmouseout = function () {
    timer = setInterval(autoBanner, 3000);
}

//下一张
next.onclick = function () {
    i++;
    if (i > imgArr.length - 1) {
        i = 0;
    }
    //设置图片路径
    banner();
}
//上一张
prev.onclick = function () {
    i--;
    if (i < 0) {
        i = imgArr.length - 1;
    }
    //设置图片路径
    banner();
}

//点击点
//拿到所有点
for (let j = 0; j < lis.length; j++) {
    //绑定点击事件
    lis[j].onmouseover = function () {
        //设置图片路径
        i = j;
        banner();
    }
}

//楼层效果
let elevator = document.querySelector('.elevator');
let header = document.querySelector('.header');
let items = document.querySelectorAll('.items');
let eleA = document.querySelectorAll('.elevator>a');

//header+banner的高度
let to = header.offsetHeight + slideBanner.offsetHeight + 40;//基础的距离

//声明一个数组，存储四个div距上面的距离
let floor = [];
//拿到四个div
for (let i = 0; i < items.length; i++) {
    to = to + items[i].offsetHeight
    floor.push(to);
}
console.log(floor);

//封装去掉a样式的函数
function clear() {
    for (let i = 0; i < eleA.length; i++) {
        eleA[i].className = '';
    }
}


//给页面绑定滚动监听事件
window.onscroll = function () {
    //获取滚动条距上面的距离
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    //获取元素距上面的距离
    let top1 = header.offsetHeight + slideBanner.offsetHeight + 40;
    console.log(top1);
    //判断
    if (top >= top1) {
        //固定定位
        elevator.className = 'elevator elevator-fix';
    } else {
        elevator.className = 'elevator';
    }

    //楼层效果
    //判断top距上面的距离，对应的a修改字体颜色
    if (top >= top1 && top < floor[0]) {
        clear();
        eleA[0].className = 'active';
    }
    else if (top >= floor[0] && top <= floor[1]) {
        clear();
        eleA[1].className = 'active';
    }
    else if (top >= floor[1] && top < floor[2]) {
        clear();
        eleA[2].className = 'active';
    }
    else if (top >= floor[2]) {
        clear();
        eleA[3].className = 'active';
    }
    if (top < top1) {
        clear();
    }
}

// 昵称鼠标悬停变色
$(".nickname").mouseover(function () {
    $(".nickname").css("color", "#e1251b");
});

$(".nickname").mouseleave(function () {
    $(".nickname").css("color", "#666");
});

// 登录鼠标悬停变色
$(".userLogin").mouseover(function () {
    $(".userLogin").css("color", "#e1251b");
});

$(".userLogin").mouseleave(function () {
    $(".userLogin").css("color", "#666");
});

// 注册鼠标悬停变色
$(".userRegister").mouseover(function () {
    $(".userRegister").css("color", "#e1251b");
});

$(".userRegister").mouseleave(function () {
    $(".userRegister").css("color", "#666");
});

// 新人福利鼠标悬停变色
$(".userWelfare").mouseover(function () {
    $(".userWelfare").css("background", "#c52219");
});

$(".userWelfare").mouseleave(function () {
    $(".userWelfare").css("background", "#e1251b");
});


// 会员鼠标悬停变色
$(".plusMember").mouseover(function () {
    $(".plusMember").css("background", "#c52219");
    $(".plusMember").css("color", "#fff");
});

$(".plusMember").mouseleave(function () {
    $(".plusMember").css("background", "#363634");
    $(".plusMember").css("color", "#e5d790");
});

// 服务图标悬停变色
// 礼品卡
$("#giftCard").mouseover(function () {
    $("#giftCardNormal").css("display", "none");
    $("#giftCardHover").css("display", "inline-block");
    $("#giftCardText").css("color", "#e1251b");
});

$("#giftCard").mouseleave(function () {
    $("#giftCardNormal").css("display", "inline-block");
    $("#giftCardHover").css("display", "none");
    $("#giftCardText").css("color", "#333");
});

// 企业购
$("#business").mouseover(function () {
    $("#businessNormal").css("display", "none");
    $("#businessHover").css("display", "inline-block");
    $("#businessText").css("color", "#e1251b");
});

$("#business").mouseleave(function () {
    $("#businessNormal").css("display", "inline-block");
    $("#businessHover").css("display", "none");
    $("#businessText").css("color", "#333");
});

// 话费
$("#phoneBill").mouseover(function () {
    $("#pBNormal").css("display", "none");
    $("#pBHover").css("display", "inline-block");
    $("#pBText").css("color", "#e1251b");
});

$("#phoneBill").mouseleave(function () {
    $("#pBNormal").css("display", "inline-block");
    $("#pBHover").css("display", "none");
    $("#pBText").css("color", "#333");
});

// 游戏
$("#game").mouseover(function () {
    $("#gameNormal").css("display", "none");
    $("#gameHover").css("display", "inline-block");
    $("#gameText").css("color", "#e1251b");
});

$("#game").mouseleave(function () {
    $("#gameNormal").css("display", "inline-block");
    $("#gameHover").css("display", "none");
    $("#gameText").css("color", "#333");
});

// 加油卡
$("#fuelCard").mouseover(function () {
    $("#fuelCardNormal").css("display", "none");
    $("#fuelCardHover").css("display", "inline-block");
    $("#fuelCardText").css("color", "#e1251b");
});

$("#fuelCard").mouseleave(function () {
    $("#fuelCardNormal").css("display", "inline-block");
    $("#fuelCardHover").css("display", "none");
    $("#fuelCardText").css("color", "#333");
});

// 白条
$("#IOU").mouseover(function () {
    $("#IOUNormal").css("display", "none");
    $("#IOUHover").css("display", "inline-block");
    $("#IOUText").css("color", "#e1251b");
});

$("#IOU").mouseleave(function () {
    $("#IOUNormal").css("display", "inline-block");
    $("#IOUHover").css("display", "none");
    $("#IOUText").css("color", "#333");
});

// 机票
$("#planeTicket").mouseover(function () {
    $("#pTNormal").css("display", "none");
    $("#pTHover").css("display", "inline-block");
    $("#pTText").css("color", "#e1251b");
});

$("#planeTicket").mouseleave(function () {
    $("#pTNormal").css("display", "inline-block");
    $("#pTHover").css("display", "none");
    $("#pTText").css("color", "#333");
});

// 电影票
$("#movieTicket").mouseover(function () {
    $("#mTNormal").css("display", "none");
    $("#mTHover").css("display", "inline-block");
    $("#mTText").css("color", "#e1251b");
});

$("#movieTicket").mouseleave(function () {
    $("#mTNormal").css("display", "inline-block");
    $("#mTHover").css("display", "none");
    $("#mTText").css("color", "#333");
});

// 五金城 
$("#hardwareShop").mouseover(function () {
    $("#hSNormal").css("display", "none");
    $("#hSHover").css("display", "inline-block");
    $("#hSText").css("color", "#e1251b");
});

$("#hardwareShop").mouseleave(function () {
    $("#hSNormal").css("display", "inline-block");
    $("#hSHover").css("display", "none");
    $("#hSText").css("color", "#333");
});

// 酒店
$("#hotel").mouseover(function () {
    $("#hotelNormal").css("display", "none");
    $("#hotelHover").css("display", "inline-block");
    $("#hotelText").css("color", "#e1251b");
});

$("#hotel").mouseleave(function () {
    $("#hotelNormal").css("display", "inline-block");
    $("#hotelHover").css("display", "none");
    $("#hotelText").css("color", "#333");
});

// 火车票
$("#trainTicket").mouseover(function () {
    $("#tTNormal").css("display", "none");
    $("#tTHover").css("display", "inline-block");
    $("#tTText").css("color", "#e1251b");
});

$("#trainTicket").mouseleave(function () {
    $("#tTNormal").css("display", "inline-block");
    $("#tTHover").css("display", "none");
    $("#tTText").css("color", "#333");
});

// 云主机
$("#vps").mouseover(function () {
    $("#vpsNormal").css("display", "none");
    $("#vpsHover").css("display", "inline-block");
    $("#vpsText").css("color", "#e1251b");
});

$("#vps").mouseleave(function () {
    $("#vpsNormal").css("display", "inline-block");
    $("#vpsHover").css("display", "none");
    $("#vpsText").css("color", "#333");
});
