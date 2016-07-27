// .static        -> .blog
// .menu          -> .blog-nav
// .menu__wrapper -> .blog-menu

$(window).scroll(function() {
  var
      wScroll = $(window).scrollTop(),
      menu = $('.blog .blog-nav'),
      sidebar = $('.static .blog-menu'),
      stickyStart = sidebar.offset().top,
      menuClone = sidebar.clone(),
      fixedSidebar = $('.fixed .left__col');

  if (wScroll >= stickyStart) {


    if (!fixedSidebar.find('.blog-menu').length) {
      fixedSidebar.append(menuClone);
      menu.hide();
    }


  } else {
    fixedSidebar.find('.blog-menu').remove();
    menu.show();
  }

});

















(function() {
  'use strict';

  var authModule = (function () {
    var authBtn = $('.autorize-btn'),
        authBlock = $('.card-rotate'),
        active = 'checked';
    return {
      init: function () {
        authBtn.on('click', function (e) {
          e.preventDefault();
          var $this = $(this);
          authBlock.prop('checked', true);
          // $this.style.display = 'none';
        })
      }
    };
  }());

  authModule.init();

  var authModulefullscreen = (function () {
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".card-rotate"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        if (div.attr('checked', true)) {
          div.removeAttr('checked')
        }
        else if (!div.attr('checked')) {

          div.prop('checked', true);
        }
      }
    });
  }());

})();