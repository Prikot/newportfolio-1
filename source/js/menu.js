$('.toggle-menu').on('click touchstart', function(){

    var $this = $(this);
    console.log($(this));

    $('.sandw').toggleClass('active');

    if(!$this.hasClass('active')) {
      $('.screen-menu').show().addClass('active');

      setTimeout(function(){
        showMenuItems(true);
      }, 500);
    } else {
      $('.screen-menu').fadeOut(function(){
        $(this).removeClass('active');
        showMenuItems(false);
      });
    }
    $this.toggleClass('active');
  });



  function showMenuItems(show) {
    var
      items = $('.screen-menu__link'),
      delay = 600,
      counter = 0,
      timer;

    function each() {
      var $this = items.eq(counter);

      $this.addClass('active');

      if (typeof timer !== 'undefined') {
        clearTimeout(timer);
      }

      if ($this.length) {
        timer = setTimeout(each, delay);
      }

      counter++;
    }

    if (show) {
      each();
    } else {
      items.removeClass('active');
    }
  }
