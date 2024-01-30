const btn = document.querySelector('.contact');

btn.onmousemove = function(e){
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;
  
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
}


$(document).ready(function(){

    





$('.infos>a').each(function() {
    let posX;
    let posY;
    let $link = $(this);
    let $image = $link.find('.screenshots');

    $link.mousemove(
      function(event){
        posX=event.pageX - $link.offset().left;
        posY=event.pageY - $link.offset().top;
        $image.css({
          scale: '1',
          top:posY + 'px',
          left:posX + 'px',
          animation:'in ease 0.5s forwards'
        });
      }).mouseleave(function(){
        $image.css({
          scale:'0',
          animation:'out ease 0.5s forwards'
        })
      })
  });
});