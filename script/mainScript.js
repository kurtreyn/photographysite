'use strict';

$(document).ready(function () {
  $('.lightbox-trigger').click(function (e) {
    //PREVENT DEFAULT ACTION OF GOING TO HYPERLINK
    e.preventDefault();

    //GET CLICKED LINK'S HREF
    var image_href = $(this).attr('href');

    /*  
   IF LIGHTBOX WINDOW HTML HAS ALREADY BEEN LOADED IN DOCUMENT, CHANGE IMG SRC TO MATCH HREF OF LINK THAT WAS CLICKED

   IF LIGHTBOX WINDOW DOESN'T EXIST, CREATE AND INSERT IT (HAPPENS ON ITINIAL PAGE LOAD)
   */

    if ($('#lightbox').length > 0) {
      // #lightbox EXISTS

      //PLACES HREF AS IMG SRC VALUE
      $('#content').html('<img src="' + image_href + '" />');

      //DISPLAY LIGHTBOX WINDOW
      $('#lightbox').show('fast');
    } else {
      //#lightbox DOESN'T EXIST, CREATE AND INSERT (RUNS ONCE ON INITIAL LOAD)

      //CREATE HTML FOR LIGHTBOX
      var lightbox =
        '<div id="lightbox">' +
        '<p class="closeBtn">&times;</p>' +
        '<div id="content">' + //ADD CLICKED LINKS HREF TO SRC
        '<img src="' +
        image_href +
        '" />' +
        '</div>' +
        '</div>';

      //
      $('body').append(lightbox);
    }
    $('.gallery-container').addClass('lightbox-active');
  });

  //CLICK ON ANY PART OF PAGE TO REMOVE LIGHTBOX
  $('body').on('click', '#lightbox', function () {
    //USE 'ON' SINCE LIGHTBOX IS INSERTED INTO DOM
    $('#lightbox').hide();
    $('.gallery-container').removeClass('lightbox-active');
  });
});
