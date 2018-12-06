var zoomOne = document.getElementsByClassName('zoomPic')[0],
    zoomOneBGSize = window.getComputedStyle(zoomOne).getPropertyValue('background-size'),
    $zoomTwo = $('.zoomPic:eq(1)'),
    zoomTwoBGSize = $zoomTwo.css('background-size');

document.getElementsByClassName('zoom')[0].onclick = function() {
  if(!zoomOne.classList.contains('zoom'))
  {
    zoomOne.classList.add('zoom');
  } 
}
document.getElementsByClassName('pause')[0].onclick = function() {
    var computedStyle = window.getComputedStyle(zoomOne),
        backgroundSize = computedStyle.getPropertyValue('background-size');
    zoomOne.style.backgroundSize = backgroundSize;
    zoomOne.classList.remove('zoom');
  }
document.getElementsByClassName('zoomout')[0].onclick = function() {
  zoomOne.classList.remove('zoom');
  zoomOne.style.backgroundSize = zoomOneBGSize;
}
