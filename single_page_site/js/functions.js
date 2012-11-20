$(document).ready(function() {

  $("img.opacity").each(function() {
    $(this).css({
      opacity : 0.01
    });
  });

  $("#board_01 .slide").cycle({
    delay : -14500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_02 .slide").cycle({
    delay : -5500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_03 .slide").cycle({
    delay : -7500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_04 .slide").cycle({
    delay : -11500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_05 .slide").cycle({
    delay : -10500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_06 .slide").cycle({
    delay : 500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_07 .slide").cycle({
    delay : -3500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_08 .slide").cycle({
    delay : -1500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_09 .slide").cycle({
    delay : -4500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_10 .slide").cycle({
    delay : -2500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_11 .slide").cycle({
    delay : -13500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_12 .slide").cycle({
    delay : -9500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_13 .slide").cycle({
    delay : -12500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_14 .slide").cycle({
    delay : -8500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_15 .slide").cycle({
    delay : -500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });
  $("#board_16 .slide").cycle({
    delay : -6500,
    fx : 'scrollLeft',
    speed : 500,
    timeout : 16000
  });

  $(".works_cont").css({
    opacity : 0.20
  });

  $("#board ul li").hover(function() {
    $(this).siblings().stop().animate({
      opacity : 0.20
    });
    $(this).find("img.opacity").stop().animate({
      opacity : 1
    });
  }, function() {
    $(this).siblings().stop().animate({
      opacity : 1
    });
    $(this).find("img.opacity").stop().animate({
      opacity : 0.01
    });
  });

  $("#board ul li a").click(function() {
    var difference = ($(window).height() - 705) / 2;
    var offset = $($(this).attr("href")).offset().top;
    var move = offset - difference;
    $("html, body").stop().animate({
      scrollTop : move + "px"
    }, {
      duration : 500,
      easing : "swing"
    });
    /* $("#board").stop().animate({opacity: 0.20});
     $($(this).attr("href")).stop().animate({opacity: 1});
     $($(this).attr("href")).siblings(".works_cont").stop().animate({opacity: 0.20}); */
    return false;
  });

  $("a.popup").prettyPhoto({
    social_tools : false
  });

});

$(window).load(function() {
  $("#work_01").find(".slider").easySlider({
    continuous : true,
    nextId : "next01",
    prevId : "prev01"
  });
  $("#work_02").find(".slider").easySlider({
    continuous : true,
    nextId : "next02",
    prevId : "prev02"
  });
  $("#work_03").find(".slider").easySlider({
    continuous : true,
    nextId : "next03",
    prevId : "prev03"
  });
  $("#work_04").find(".slider").easySlider({
    continuous : true,
    nextId : "next04",
    prevId : "prev04"
  });
  $("#work_05").find(".slider").easySlider({
    continuous : true,
    nextId : "next05",
    prevId : "prev05"
  });
  $("#work_06").find(".slider").easySlider({
    continuous : true,
    nextId : "next06",
    prevId : "prev06"
  });
  $("#work_07").find(".slider").easySlider({
    continuous : true,
    nextId : "next07",
    prevId : "prev07"
  });
  $("#work_08").find(".slider").easySlider({
    continuous : true,
    nextId : "next08",
    prevId : "prev08"
  });
  $("#work_09").find(".slider").easySlider({
    continuous : true,
    nextId : "next09",
    prevId : "prev09"
  });
  $("#work_10").find(".slider").easySlider({
    continuous : true,
    nextId : "next10",
    prevId : "prev10"
  });
  $("#work_11").find(".slider").easySlider({
    continuous : true,
    nextId : "next11",
    prevId : "prev11"
  });
  $("#work_12").find(".slider").easySlider({
    continuous : true,
    nextId : "next12",
    prevId : "prev12"
  });
  $("#work_13").find(".slider").easySlider({
    continuous : true,
    nextId : "next13",
    prevId : "prev13"
  });
  $("#work_14").find(".slider").easySlider({
    continuous : true,
    nextId : "next14",
    prevId : "prev14"
  });
  $("#work_15").find(".slider").easySlider({
    continuous : true,
    nextId : "next15",
    prevId : "prev15"
  });
  $("#work_16").find(".slider").easySlider({
    continuous : true,
    nextId : "next16",
    prevId : "prev16"
  });

  $(".showcase span[id*='prev']").addClass("prev");
  $(".showcase span[id*='next']").addClass("next");

  $(".showcase a").each(function() {
    $(this).css({
      opacity : 0.01
    }).hover(function() {
      $(this).stop().animate({
        opacity : 1
      });
    }, function() {
      $(this).stop().animate({
        opacity : 0.01
      });
    });
  });
});

$(window).scroll(function() {
  var scrollCenter = $(window).height() / 2;
  $("#board").each(function() {
    var boardOffsetTop = $(this).offset().top - $(document).scrollTop();
    var boardOffsetBot = boardOffsetTop + $(this).height();

    if (boardOffsetTop > scrollCenter) {
      $(this).stop().animate({
        opacity : 0.20
      });
    } else if (boardOffsetBot < scrollCenter) {
      $(this).stop().animate({
        opacity : 0.20
      });
    } else {
      $(this).stop().animate({
        opacity : 1
      });
    }
    ;
  });
  $(".works_cont").each(function() {
    var workOffsetTop = $(this).offset().top - $(document).scrollTop();
    var workOffsetBot = workOffsetTop + $(this).height();

    if (workOffsetTop > scrollCenter) {
      $(this).stop().animate({
        opacity : 0.20
      });
    } else if (workOffsetBot < scrollCenter) {
      $(this).stop().animate({
        opacity : 0.20
      });
    } else {
      $(this).stop().animate({
        opacity : 1
      });
    }
    ;
  });
}); 