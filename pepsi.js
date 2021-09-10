



var banner = document.getElementsByClassName('banner_section');
var image2 = document.getElementById('image2');
var naver  = document.getElementsByClassName('navber_secioton');

// var bc_image = document.getElementById('bc_image');

function afterclick1(){
    banner[0].style.background= 'black';
    bc_image.src = 'image/black pepsi.png';
    naver[0].style.background = 'black';
}


function afterclick2(){
    banner[0].style.background= 'blue';
    bc_image.src = 'image/blue pepsi.png';
    naver[0].style.background = 'blue';
}

function afterclick3(){
    banner[0].style.background= 'rgb(161, 158, 158)';
    bc_image.src = 'image/white pepsi.png';
    naver[0].style.background = 'rgb(161, 158, 158)';
}

