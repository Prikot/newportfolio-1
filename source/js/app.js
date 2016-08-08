// blog
// .sidebar =
// .static        -> .blog
// .menu          -> .blog-nav
// .menu__wrapper -> .blog-menu
// //
// //.blog-side --> .blog-menu
// //   alert(jQuery.fn.jquery);
//   var sidebar = $('.blog-menu'),
//       menu = $('.blog-nav'),
//       windowMargin = 60;
// $(window).scroll(function() {
//   var wScroll = $(window).scrollTop();
//   stickIt(wScroll);
// });
//   var menuFixedContainer = '<div class="fixed-blog-side">\
//     <div class="container">\
//     <div class="fixed-blog-side__left"></div>\
//     <div class="fixed-blog-side__right"></div>\
//     </div>\
//     </div>';
//
//   function stickIt(wScroll) {
//
//     var stickyStart = sidebar.offset().top - windowMargin;
//     if(wScroll >= stickyStart) {
//       if(!$('.fixed-blog-side').length) {
//         sidebar.append(menuFixedContainer);
//
//         var fixedMenu = $('.fixed-blog-side'),
//             menuContainer = fixedMenu.find('.fixed-blog-side__left'),
//             menuClone = menu.clone();
//
//         fixedMenu.css('top', windowMargin);
//         menuContainer.append(menuClone);
//         menu.hide();
//       } else {
//         $('.fixed-blog-side').remove();
//         menu.show();
//       }
//     }


  // }















  (function() {
    'use strict';

    // var authModule = (function () {
    //   var authBtn = $('.autorize-btn'),
    //       authBlock = $('.card-rotate'),
    //       active = 'checked';
    //   return {
    //     init: function () {
    //       authBtn.on('click', function (e) {
    //         e.preventDefault();
    //         var $this = $(this);
    //         authBlock.prop('checked', true);
    //         // $this.style.display = 'none';
    //       })
    //     }
    //   };
    // }());
    //
    // authModule.init();

    // var authModulefullscreen = (function () {
    //   $(document).mouseup(function (e){ // событие клика по веб-документу
    //     var div = $(".card-rotate"); // тут указываем ID элемента
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //       if (div.attr('checked', true)) {
    //         div.removeAttr('checked')
    //       }
    //       else if (!div.attr('checked')) {
    //
    //         div.prop('checked', true);
    //       }
    //     }
    //   });
    // }());


    $(window).scroll(function() {
      var
          wScroll = $(window).scrollTop(),

          menu = $('.blog .blog-nav'),
          sidebar = $('.blog .blog-menu'),
          stickyStart = sidebar.offset().top,
          menuClone = sidebar.clone(),
          fixedSidebar = $('.fixed .left__col');
      changeActiveOnScroll(wScroll);
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

    function changeActiveOnScroll(wScroll) {
        var sections = $('.blog-news li');
        $.each(sections, function () {
          var $this = $(this),
          windowMargin = $(window).height() / 2,
          topEdge = $this.offset().top - windowMargin,
          bottomEdge = topEdge + $this.height();
        if(wScroll > topEdge && wScroll < bottomEdge) {
          var index = $this.index();

          $('.blog-nav').each(function () {
            var $this = $(this);
            $this.find('.blog-side__item')
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active');

          })
        }
      })

    }

    var wScroll = $(window).scrollTop();
    changeActiveOnScroll(wScroll);


  })();



