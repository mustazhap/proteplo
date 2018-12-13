$(document).ready(function () {

  // Menu on header
  $(".nav__item").mouseenter(function(){
    $(this).find(".nav__drop").css({"top":"26px", "opacity":"1", "visibility":"visible"}); 
  });

  $(".nav__item, .nav__drop").mouseleave(function(){
    $(this).find(".nav__drop").css({"top":"62px", "opacity":"0", "visibility":"hidden"}); 
  });

  // Second menu

  $(".header-bottom__menu-item, .header-bottom__menu-drop").mouseenter(function(){
    $(this).find(".header-bottom__menu-drop").css({ "opacity":"1", "visibility":"visible"}); 
  });

  $(".header-bottom__menu-item").mouseleave(function(){
    $(this).find(".header-bottom__menu-drop").css({"opacity":"0", "visibility":"hidden"}); 
  });

// Filter menu
  $(".filter__show").click(function(){
    $(this).toggle();
    $(".fbody").toggle();
  })

  $(".fbody__header").click(function(){
    $(".fbody").toggle();
    $(".filter__show").toggle();
  })

  // Burger menu
  var a = true;
  $(".burger" ).click(function() {
    $(this).toggleClass("burger_active"); 
    
    if (a){
      $("#burger-menu").css("left", "0");
      a = false;
      $("body").css("overflow", "hidden");
    }else{
      $("#burger-menu").css("left", "-100%");
      a = true;
      $("body").css("overflow", "auto");
    }
 });

 $(".li-open" ).click(function() {
  $(this).parent(".burger-wrapper").css({"visibility":"hidden", "opacity":"0"}).next().css({"visibility":"visible", "opacity":"1"});
});

$(".li-back span" ).click(function() {
  $(this).parent().parent().parent(".burger-wrapper").css({"visibility":"hidden", "opacity":"0"}).prev().css({"visibility":"visible", "opacity":"1"});
  
});

//  Search mob
$(".search").click(function(){
  $(".header__mob-search").toggleClass("search_active"); 
});
 // show popup
 $(".popup-close").click(function(){
   $(".popup").hide();
   $("body").css("overflow", "auto");
 });
 $(".popup").click(function(){
  $(".popup").hide();
  $("body").css("overflow", "auto");

});
 
 $(".popup-content").click(function(event){
  event.stopPropagation();
});

 $(".pop-button").click(function(){
  var a = $(this).attr("rel");
  $(a).show().css("display", "flex");
   $("body").css("overflow", "hidden");
})

  // Slider Promo
  function slideSwitch()
    {
        var slide_wrapper = $("#wrapper").css("left");
        if ( slide_wrapper != "-1150px" ){
          $("#wrapper").css("left", "-=575");
        }
        else{ 
          $("#wrapper").css("left", "0");
        }
  }

  var interval = setInterval( slideSwitch, 4000 );

  $('.promo__slide').hover(function() {
      clearInterval(interval);
  }, function() {
      interval = setInterval( slideSwitch, 4000 );
  });

  $(".promo__slide-controller" ).click(function() {
     var ind = $(this).index();
     console.log(ind);
     switch (ind) { 
      case 0: 
      $("#wrapper").css("left", "0");
        break;
      case 1: 
        $("#wrapper").css("left", "-575px");
        break;
      case 2: 
        $("#wrapper").css("left", "-1150px");
        break;
    }
  });

  
// 
$().fancybox({
  selector : '.fancy',
  thumbs   : false,
  loop: true,
  infobar: false
});
// Tabs 
$(".tabs__button").click(function(){
  var a = $(this).attr("rel");
  $( ".tabs__body" ).each(function() {
    $( this ).css( "display", "none");
  });

  $( ".tabs__button" ).each(function() {
    $( this ).removeClass("tabs__button_active");
  });
  $(".tabs__body").eq(a).css("display","block");
  $(this).addClass("tabs__button_active");
  
});

// Подсказка
$('.prompt').each(function() {
  var el = $(this);
  var title = el.attr('title');

  if (title && title != '') {
    el.attr('title', '').append('<div>' + title + '</div>');
    var width = el.find('div').width();
    var height = el.find('div').height();

    el.hover(
      function() {
        console.log("sdf");
        el.find('div').css("visibility", "visible");
          
      },).mouseleave(function() {
        el.find('div').css("visibility", "hidden");
    });
  }
})

$('.product__button-compare').click(
  function() {
    $(this).toggleClass("product__button-compare--act");
  });

  $('.product__button-hint').click(
    function() {
      $(this).toggleClass("product__button-hint--act");
    });

//  View
$('.view-button').click(
  function() {
    if($(this).hasClass("filter__plit") && $(this).hasClass("filter__plit_active") == false){
      console.log(10);
      $(".view-plit").css("display","flex");
      $(".view-list").css("display","none");
      $(".filter__plit").addClass("filter__plit_active");
      $(".filter__list").removeClass("filter__list_active");
    }

    else if($(this).hasClass("filter__list") && $(this).hasClass("filter__list_active") == false){
      console.log(102);
      $(".view-list").css("display","flex");
      $(".view-plit").css("display","none");
      $(".filter__list").addClass("filter__list_active");
      $(".filter__plit").removeClass("filter__plit_active");
    }
  }
);

$('.filter__list').click(
  function() {
   if($(".trademarks__list").css("display") == "none"){
     $(this).toggleClass("filter__list_active");
     $(".trademarks__plit").css("display", "none");
     $(".trademarks__list").css("display", "flex");
     $('.filter__plit').removeClass("filter__plit_active");
   }
  }
);

 



// 
$('.spoiler').click(
  function() {
    $(this).toggleClass("spoiler_active").next().slideToggle()
  }
);

// Свернуть 
$(".subcotegory__title").click(function(){
  $(this).toggleClass("subcotegory__title_a");
  $(".subcotegory__wrapper").toggle();

});
// Маска для телефона
$(".mask").mask("+7 (999) 999 99 99");
$(".mask2").mask("8 (999) 999 99 99");


// Читать далее 
$(".trademarks__text_more").find("a").click(function(){
  console.log($(this).html());
  if ($(this).html() == "Читать далее"){
    $(this).parent().parent().find(".trademarks__text_hidden").css({"visibility":"visible", "position":"relative", "opacity":"1"}); 
    $(this).parent().find("span").hide();
    $(this).html("Свернуть");
  } 
  else{
    $(this).parent().parent().find(".trademarks__text_hidden").css({ "opacity":"0","visibility":"hidden", "position":"absolute"}); 
    $(this).parent().find("span").show();
    $(this).html("Читать далее");
  }
});

// Код выбора (Select)
$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  $('<li />', {
    'class': 'select-option act',
      text: $this.children('option').eq(0).text(),
      rel: $this.children('option').eq(0).text()
  }).appendTo($list);
  for (var i = 1; i < numberOfOptions; i++) {
      $('<li />', {
        'class': 'select-option',
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.select_active').not(this).each(function(){
          $(this).removeClass('select_active').next('ul.select-options').hide();
      });
      $(this).toggleClass('select_active').next('ul.select-options').toggle();
  });



  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('select_active');
      $this.val($(this).attr('rel'));
      $('li.select-option.act').not(this).each(function(){
        $(this).removeClass('act');});
      $(this).toggleClass('act');
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('select_active');
      $list.hide();
  });

  $(".select-options").mouseleave(function() {
    $styledSelect.removeClass('select_active');
    $list.hide();
  });

});

// show for filter
$(".aside__checks-show").click(function(e) {
  if($(this).find("a").html() == "Свернуть"){
    $(this).find("a").html("Показать все");

  }
  else{
    $(this).find("a").html("Свернуть");
  }
  $(this).prev().toggleClass("aside__checks-hidden");
});

// Item slider
$(".item__thumb a").click(function(event){
  $(".item__image").find("img").attr('src', $(this).find("img").attr('src'));
  event.stopPropagation();
  return false;
});

// Slider with 2 handles
$(function () {
  // the code belows assume the colors array is exactly one element bigger than the handlers array.
  var handlers = [0,0];
  var colors = ["#fff", "rgb(77, 192, 61)", "#fff"];
  updateColors(handlers);
  
  $(".sliderr").slider({
      min: 0,
      max: 100,
      values: handlers,
      slide: function (evt, ui) {
          updateColors(ui.values);
      }
  });
  
 

  $("input.sliderValue").change(function() {
    var $this = $(this);
    updateColors($(".sliderr").slider("values", $this.data("index"), $this.val()));
    
  });

  function updateColors(values) {
    var colorstops = colors[0] + ", "; // start left with the first color
        for (var i=0; i< values.length; i++) {
            colorstops += colors[i] + " " + values[i] + "%,";
            colorstops += colors[i+1] + " " + values[i] + "%,";
        }
        // end with the last color to the right
        colorstops += colors[colors.length-1];
        
        /* Safari 5.1, Chrome 10+ */
        var css = '-webkit-linear-gradient(left,' + colorstops + ')';
        $('#slider').css('background', css);
}
});

// Item Gallery
// $("a[rel^='prettyPhoto']").click(function() {
//   var api_images = [];
//   var albumData = $(".item__thumb").find("img").attr("src");
//   $.each(albumData, function(index, item){
//     api_titles.push(item.src)

//   })
// });



  // Owl Carousel

  $('.owl-main').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        700:{
          items: 3
        },
        1000:{
            items:4
        },
        1180:{
          items:5
        }
    }
})



$('.owl-items').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  dots: false,
  slideBy: 3,
  responsive:{
      0:{
          items:3
      },
      700:{
          items:3
      },
      1000:{
          items:3
      },
      1180:{
        items:5
      }
  }
})

$('.owl-help').owlCarousel({
  loop:true,
  margin:20,
  dots: true,
  slideBy: 3,
  responsive:{
      0:{
          items:1
      },
      600:{
          items: 1
      }
  }
})



// slider 
$("#slider").slider({
  min: 0,
  max: 100,
  step: 1,
  values: [10, 90],
  slide: function(event, ui) {
      for (var i = 0; i < ui.values.length; ++i) {
          $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
      }
  }
});
});

