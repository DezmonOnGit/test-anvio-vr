$(document).ready(function(){

	// TABS BEGIN
  function commonSwitchTab (selector) {
    var getAttr = $(this).attr('data-tabControl');
    $(selector + ' [data-tabControl]').removeClass('tab-nav__item_active')
    $(selector + ' [data-tabControl]').children('.btn-proj__tab').removeClass('btn-proj__tab_active')
    $(this).addClass('tab-nav__item_active')
    $(this).children('.btn-proj__tab').addClass('btn-proj__tab_active')
    $(selector).attr('data-tab', '')
    $(selector + '[data-tab]').attr('data-tab', getAttr)
    $(selector + ' [data-tabContent]').removeClass('tab-content__item_active');
    $(selector + ' [data-tabContent="'+ getAttr + '"]').addClass('tab-content__item_active')
  }

  function tabCall(selector) {
      $(selector + ' [data-tabControl]').on('click', function () {
          commonSwitchTab.call(this, selector);
      });
  }

  tabCall('.tab__js')
  // TABS END

  //Burger-menu event - click begin

  $('.menu-burger').on('click', function() {
    $(this).toggleClass('menu-burger_active');
    $('body').toggleClass('hide-scroll');
  });

  //Burger-menu event - click begin

});
