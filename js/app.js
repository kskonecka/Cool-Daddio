$(function(){

  function watchTrailer() {
    var trailerLink = $('.a-watch-trailer');


    trailerLink.on('click', function(){
      var trailerUrl = "https://www.youtube.com/embed/gK_GQdiXTCc?rel=0&amp;showinfo=0";
      var trailer = $('<iframe>'); //create iFrame
      var fullScreen = $('<div>'); // create div that contains trailer

      fullScreen.addClass('fullScreen').fadeIn('slow').appendTo($('section'));//add fullScreen class and attach to <body>
      trailer.attr('src', trailerUrl).appendTo(fullScreen);//add img src and attach to <fullScreen>

      $('body').on('click', '.fullScreen', function(){ //exits full screen
        fullScreen.fadeOut('slow');
      });
    });//end of trailerLink.event
  }

watchTrailer();
});
