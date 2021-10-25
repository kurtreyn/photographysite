'use strict';

$(document).ready(function () {
  //GET ALL IMAGES FROM GALLERY AND PLACE INTO ARRAY
  const images = document.querySelectorAll('.gallery-img');
  // CREATE VARIABLE TO STORE CURRENT IMG IN
  let currentImg;

  //LIGHTBOX TRIGGER TO OPEN
  $('.lightbox-trigger').click(function (e) {
    //PREVENT URL FROM POPPING UP
    e.preventDefault();
    //PUT BLURRY BACKGROUND WHEN LIGHTBOX IS ACTIVE
    $('.gallery-container').addClass('lightbox-active');
    //SHOW LIGHTBOX
    $('#lightbox').removeClass('lightbox-hidden');
    //SET CURRENT IMAGE TO THE IMAGE THAT WAS CLICKED ON
    currentImg = $(this).attr('href');
    //DISPLAY THE IMAGE THAT WAS CLICKED ON IN THE LIGHTBOX
    $('.lightbox-img').attr('src', currentImg);
    //GIVE <a> THE CLASS OF CURRENT
    $(this).addClass('current');
  }); //END LIGHTBOX TRIGGER FUNCTION

  //CLOSE LIGHTBOX
  $('.closeBtn').click(function () {
    //REMOVE BLURRY BACKGROUND
    $('.gallery-container').removeClass('lightbox-active');
    //HIDE THE LIGHTBOX
    $('#lightbox').addClass('lightbox-hidden');
    //REMOVE CURRENT CLASS FROM IMG
    $('.current').removeClass('current');
  }); //END CLOSE LIGHTBOX FUNCTION

  //PREV/NEXT FUNCTION
  $('.arrowBTN').click(function () {
    //STORE ELEMENT THAT IS CURRENTLY USING THE CURRENT CLASS IN A VARIABLE
    const current = $('.current');
    // SET CURRENT IMG PULLED FROM ARRAY INTO A VARIABLE
    const currentImgIndex = $(images).index(current);
    //STORE NEXT BUTTON IN A VARIABLE
    const isNextBtn = this.id === 'next';
    //INDEX OF LAST IMG
    const lastImgIndex = images.length - 1;
    //CREATE UNDEFINED VARIABLE FOR FOR INDEX OF NEXT IMAGE TO SHOW
    let nextImgIndex;

    //NEXT BUTTON HANDLER
    if (isNextBtn) {
      // IF IT'S THE LAST IMAGE IN SET, GO TO FIRST IMG
      if (currentImgIndex === lastImgIndex) {
        nextImgIndex = 0;
      } else {
        // IF IT ISN'T THE LAST IMAGE IN SET, GO TO NEXT IMG
        nextImgIndex = currentImgIndex + 1;
      }
      //PREV BUTTON HANDLER
    } else {
      if (currentImgIndex === 0) {
        nextImgIndex = lastImgIndex;
      } else {
        nextImgIndex = currentImgIndex - 1;
      }
    }
    //GET <a> ELEMENT USING NEW INDEX
    const nextImg = images[nextImgIndex];
    //UPDATE currentImg
    currentImg = nextImg;
    //REMOVE CURRENT CLASS FROM OLD <a>
    current.removeClass('current');
    //ADD CURRENT CLASS TO NEW <a>
    $(nextImg).addClass('current');
    //UPDATE LIGHTBOX IMG SRC
    $('.lightbox-img').attr('src', nextImg.href);
  });
}); //END DOCUMENT READY
