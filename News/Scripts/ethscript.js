var btnEthNews1Like = document.querySelector('#ethNews1Like');
var btnEthNews1DisLike = document.querySelector('#ethNews1DisLike');

btnEthNews1Like.addEventListener('click', function() {
  
    if (btnEthNews1DisLike.classList.contains('dislikes')) {
      btnEthNews1DisLike.classList.remove('dislikes');
    } 
  this.classList.toggle('likes');
  
});

btnEthNews1DisLike.addEventListener('click', function() {
  
    if (btnEthNews1Like.classList.contains('likes')) {
      btnEthNews1Like.classList.remove('likes');
    } 
  this.classList.toggle('dislikes');
  
});

var btnEthNews2Like = document.querySelector('#ethNews2Like');
var btnEthNews2DisLike = document.querySelector('#ethNews2DisLike');

btnEthNews2Like.addEventListener('click', function() {
  
    if (btnEthNews2DisLike.classList.contains('dislikes')) {
      btnEthNews2DisLike.classList.remove('dislikes');
    } 
  this.classList.toggle('likes');
  
});

btnEthNews2DisLike.addEventListener('click', function() {
  
    if (btnEthNews2Like.classList.contains('likes')) {
      btnEthNews2Like.classList.remove('likes');
    } 
  this.classList.toggle('dislikes');
  
});

var btnEthNews3Like = document.querySelector('#ethNews3Like');
var btnEthNews3DisLike = document.querySelector('#ethNews3DisLike');

btnEthNews3Like.addEventListener('click', function() {
  
    if (btnEthNews3DisLike.classList.contains('dislikes')) {
      btnEthNews3DisLike.classList.remove('dislikes');
    } 
  this.classList.toggle('likes');
  
});

btnEthNews3DisLike.addEventListener('click', function() {
  
    if (btnEthNews3Like.classList.contains('likes')) {
      btnEthNews3Like.classList.remove('likes');
    } 
  this.classList.toggle('dislikes');
  
});


var btnEthNews4Like = document.querySelector('#ethNews4Like');
var btnEthNews4DisLike = document.querySelector('#ethNews4DisLike');

btnEthNews4Like.addEventListener('click', function() {
  
    if (btnEthNews4DisLike.classList.contains('dislikes')) {
      btnEthNews4DisLike.classList.remove('dislikes');
    } 
  this.classList.toggle('likes');
  
});

btnEthNews4DisLike.addEventListener('click', function() {
  
    if (btnEthNews4Like.classList.contains('likes')) {
      btnEthNews4Like.classList.remove('likes');
    } 
  this.classList.toggle('dislikes');
  
});