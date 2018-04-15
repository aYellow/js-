var img1 = document.querySelector("img");
img1.onclick = function(){
    var src1 = img1.getAttribute("src");
    if(src1 == 'images/1.jpg'){
        img1.setAttribute('src','images/2.jpg');
    }else{
        img1.setAttribute('src','images/1.jpg');
    }
}

var btn = document.querySelector('button'),
title = document.querySelector('h1');

function setUserName(){
    var userName = prompt('Please enter your name:');
    localStorage.setItem('name',userName);
    title.innerHTML = '欢迎来到我的世界，'+userName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storeName = localStorage.getItem('name');
    title.innerHTML = '欢迎来到我的世界，'+storeName;
}

btn.onclick = function(){
    setUserName();
}