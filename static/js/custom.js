$(function() {

  const codes = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f' ]; // 16

  const $title = $('.random-colors');

  if ($title) {
    const chars = [];
    const startIndex = 8;
    const title = $title.text();
    for(let i=0; i<title.length; i++) {
      chars.push(`<span class="${codes[i+startIndex]}">${title[i]}</span>`);
    }
    $title.html(chars.join(''))
  }

  // if ($('pre').children('.fa-expand').length <= 0) {
  //   $('pre').append('<i class="fa fa-solid fa-expand btn-fullscreen"></i>');
  // }

  // $(document).on('click', '.btn-fullscreen', (e) => {
  //   $(e.target).toggleClass('fa-compress');
  //   $(e.target).toggleClass('fa-expand');
  //   $(e.target).parent().parent().toggleClass('fullscreen');
  // });

  // $('pre').hover((e) => {
  //   $(e.target).attr('title', 'Ctrl + Click => Toggle Full Screen');
  // if ($(e.target).has('<i class="fa fa-solid fa-expand"></i>')) {
  //   $(e.target).remove('<i class="fa fa-solid fa-expand"></i>');
  // } else {
  //   $(e.target).append('<i class="fa fa-solid fa-expand"></i>');
  // }
  // $(e.target).parent().append('<i class="fa fa-solid fa-expand"></i>');
  // });

  // Ctrl + Click
  // $('pre').on('click', (e) => {
  //   if (e.ctrlKey) {
  //     $(e.target).toggleClass('fullscreen');
  //   }
  // });

});