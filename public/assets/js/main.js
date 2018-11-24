$(document).ready(function () {

  // Menu on header
  $(".nav__item").mouseenter(function(){
    $(this).find(".nav__drop").css({"top":"26px", "opacity":"1", "visibility":"visible"}); 
  });

  $(".nav__item, .nav__drop").mouseleave(function(){
    $(this).find(".nav__drop").css({"top":"62px", "opacity":"0", "visibility":"hidden"}); 
  });

  var a = true;
  $(".burger" ).click(function() {
    $(this).toggleClass("burger_active"); 
    
    if (a){
      $("#burger-menu").css("left", "0");
      a = false;
    }else{
      $("#burger-menu").css("left", "-100%");
      a = true;
    }
 });

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

  
// Подсказка

$('.prompt').each(function() {
  var el = $(this);
  var title = el.attr('title');

  if (title && title != '') {
    el.attr('title', '').append('<div>' + title + '</div>');
    var width = el.find('div').width();
    var height = el.find('div').height();
  }
})

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

 

$('.prompt').click(
    function() {
      var title = $(this).attr('title');
      if (title == "Добавить в закладки"){
        $(this).toggleClass("product__button-hint--active");
        $(this).attr("title", "Удалить из закладок");
      }
      else if (title == "Удалить из закладок"){
        $(this).deleteClass("product__button-hint--active");
        $(this).attr("title", "Добавить в закладки");
      }
    }
  );

  $('.prompt').hover(
    function() {
      console.log(title);
      
      $(this).find('div')
        .css("visibility", "visible");
    }
  ).mouseleave(function() {
    $(this).find('div')
    .css("visibility", "hidden");
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

// Item slider
$(".item__thumb").click(function(){
  $(".item__image").find("img").attr('src', $(this).find("img").attr('src'));
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

//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:20,
//     nav:true,
//     dots: false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         },
//         1180:{
//           items:5
//         }
//     }
// })



$('.owl-items').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  dots: false,
  slideBy: 3,
  responsive:{
      0:{
          items:1
      },
      600:{
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
 

$("input.sliderValue").change(function() {
  var $this = $(this);
  $("#slider").slider("values", $this.data("index"), $this.val());
});
  
});

