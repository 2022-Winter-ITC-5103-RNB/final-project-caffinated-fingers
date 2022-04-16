var btnBtcNews1Like = document.querySelector('#btcNews1Like');
var btnBtcNews1DisLike = document.querySelector('#btcNews1DisLike');

btnBtcNews1Like.addEventListener('click', function() {
  
    if (btnBtcNews1DisLike.classList.contains('dislikes')) {
      btnBtcNews1DisLike.classList.remove('dislikes');
    } 
  this.classList.toggle('likes');
  
});

btnBtcNews1DisLike.addEventListener('click', function() {
  
    if (btnBtcNews1Like.classList.contains('likes')) {
      btnBtcNews1Like.classList.remove('likes');
    } 
  this.classList.toggle('dislikes');
  
});

var btnBtcNews2Like = document.querySelector('#btcNews2Like');
var btnBtcNews2DisLike = document.querySelector('#btcNews2DisLike');

btnBtcNews2Like.addEventListener('click', function() {
  
    if (btnBtcNews2DisLike.classList.contains('dislikes')) {
      btnBtcNews2DisLike.classList.remove('dislikes');
    } 
  this.classList.toggle('likes');
  
});

btnBtcNews2DisLike.addEventListener('click', function() {
  
    if (btnBtcNews2Like.classList.contains('likes')) {
      btnBtcNews2Like.classList.remove('likes');
    } 
  this.classList.toggle('dislikes');
  
});

var btnBtcNews3Like = document.querySelector('#btcNews3Like');
var btnBtcNews3DisLike = document.querySelector('#btcNews3DisLike');

btnBtcNews3Like.addEventListener('click', function() {
  
    if (btnBtcNews3DisLike.classList.contains('dislikes')) {
      btnBtcNews3DisLike.classList.remove('dislikes');
    } 
  this.classList.toggle('likes');
  
});

btnBtcNews3DisLike.addEventListener('click', function() {
  
    if (btnBtcNews3Like.classList.contains('likes')) {
      btnBtcNews3Like.classList.remove('likes');
    } 
  this.classList.toggle('dislikes');
  
});

var btnBtcNews4Like = document.querySelector('#btcNews4Like');
var btnBtcNews4DisLike = document.querySelector('#btcNews4DisLike');

btnBtcNews4Like.addEventListener('click', function() {
  
    if (btnBtcNews4DisLike.classList.contains('dislikes')) {
      btnBtcNews4DisLike.classList.remove('dislikes');
    } 
  this.classList.toggle('likes');
  
});

btnBtcNews4DisLike.addEventListener('click', function() {
  
    if (btnBtcNews4Like.classList.contains('likes')) {
      btnBtcNews4Like.classList.remove('likes');
    } 
  this.classList.toggle('dislikes');
  
});