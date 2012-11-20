var busystcok = URLPrefix.busystock ? URLPrefix.busystock : "http://busystock.i.yihaodian.com";
if (busystcok.indexOf("http://") < 0) {
  busystcok = "http://" + busystcok
}
var yhdChannel = {};
(function(c) {
  yhdChannel = yhdChannel || {};
  var d = false;
  var b = 500;
  var a = 30;
  yhdChannel.pageTop = function() {
    return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop)
  };
  yhdChannel.loadPrice = function() {
    if (d) {
      return
    }
    d = true;
    var i = 0;
    try {
      if (!c.cookie("provinceId")) {
        return
      }
      var g = yhdChannel.pageTop();
      if (!yhdChannel.lazyLoadPrice) {
        yhdChannel.lazyLoadPrice = c("[realpriceId]")
      }
      var m = "?mcsite=" + currBsSiteId + "&provinceId=" + c.cookie("provinceId");
      var j = [];
      if (yhdChannel.lazyLoadPrice) {
        var f = [];
        var l = {};
        yhdChannel.lazyLoadPrice.each(function(n) {
          if (a > i && c(this).offset().top <= g + 100) {
            var p = c(this).attr("realpriceId").split("_");
            var o = p[0];
            var e = p[1];
            if (!l[o]) {
              l[o] = [];
              l[o].push({
                elem : c(this),
                rule : e
              });
              m += "&productIds=" + o;
              i++
            }
          } else {
            j.push(this)
          }
        });
        yhdChannel.lazyLoadPrice = c(j);
        if (i > 0) {
          var h = busystcok + "/busystock/restful/truestock";
          c.getJSON(h + m + "&callback=?", function(e) {
            if (!e || e.ERROR) {
              return
            }
            c.each(e, function(n, q) {
              var o = q.productId;
              var p = q.productPrice;
              var r = l[o];
              c.each(r, function(s, t) {
                if (t.rule) {
                  t.elem.html(t.rule + p)
                } else {
                  t.elem.html("¥" + p)
                }
                t.elem.removeAttr("realpriceId")
              })
            })
          })
        }
      }
    } catch(k) {
      setTimeout("yhdChannel.loadPrice()", b)
    }
    if (i >= a) {
      setTimeout("yhdChannel.loadPrice()", b)
    }
    d = false
  };
  c(window).bind("scroll", yhdChannel.loadPrice)
})(jQuery);


function rankTab() {
  var b = $(".floorRight_5:first"), a = b.find("h3 span"), c = b.find("ul");
  a.mouseover(function() {
    var d = $(this);
    if (!d.hasClass("cur")) {
      a.removeClass("cur");
      d.addClass("cur");
      c.removeClass("cur");
      c.eq(d.index()).addClass("cur")
    }
  })
}

function tsSlide(b, l) {
  var p = l || 5, o = 1, f, m = $("#content_tsSlide"), c = m.find(".tsSlideList"), q = c.find("li"), j = b * p, k = m.find(".tsSlideSwitch li"), g = false;
  m.hover(function() {
    clearInterval(f)
  }, function() {
    f = setInterval(function() {
      if (o == p) {
        o = 1;
        a()
      } else {
        e();
        o++
      }
      k.removeClass("cur");
      k.eq(o - 1).addClass("cur")
    }, 5000);
  }).trigger("mouseout");
  function a() {
    q.eq(0).addClass("cur").css("left", j);
    c.animate({
      left : -j
    }, 500);
    setTimeout(function() {
      q.eq(0).removeClass("cur").css("left", 0);
      c.css("left", 0)
    }, 800)
  }

  function e() {
    var i = -b * o;
    c.animate({
      left : i + "px"
    }, 500)
  }
  
 
  k.mouseover(function() {
    var s = $(this).index(), i = -b * s;
    if (s != 0 || o != 1) {
      o = s + 1;
      k.removeClass("cur");
      $(this).addClass("cur");
      c.stop().animate({
        left : i
      }, 500)
    }
  });
  var d = q.find("img"), n = d.length, h = 0;
  var r = setInterval(function() {
    if (h >= n) {
      clearInterval(r);
      return
    }
    var i = d[h];
    if (isWidescreen) {
      if (i.getAttribute("wi") != null && i.getAttribute("wi").length > 0) {
        i.src = i.getAttribute("wi")
      }
    } else {
      if (i.getAttribute("si") != null && i.getAttribute("si").length > 0) {
        i.src = i.getAttribute("si")
      }
    }
    h++
  }, 200)
}

function scrollTop() {
  var a = document.getElementById("scrollTop");
  loli.delay(window, "scroll", function() {
    return true
  }, function() {
    if ($(window).scrollTop() > 230) {
      a.className = ""
    } else {
      a.className = "scrollTop"
    }
  }, 500);
  $(a).click(function() {
    $(window).scrollTop(0)
  })
}

function grouponCountdownTime(c) {
  if (c && c >= 0) {
    var d = Math.floor(c % 60);
    var f = Math.floor((c / 60) % 60);
    var a = Math.floor((c / 3600) % 24);
    var b = Math.floor((c / 3600) / 24);
    if (f >= 0 && f <= 9) {
      f = "0" + f
    }
    if (d >= 0 && d <= 9) {
      d = "0" + d
    }
    a = b * 24 + a;
    var e = "剩余" + a + "小时" + f + "分" + d + "秒";
    $("#grouponRemainTimeShow").html(e);
    setTimeout(function() {
      grouponCountdownTime(c - 1)
    }, 1000)
  }
}

function calLimitTime() {
  var a;
  if ( typeof (nowTime) == "undefined" || nowTime == undefined) {
    var h = new Date();
    a = new Array(h.getFullYear(), h.getMonth() + 1, h.getDate(), h.getHours(), h.getMinutes(), h.getSeconds())
  } else {
    a = nowTime.split("-")
  }
  var c = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
  var f = c.getTime();
  var b = $("#curGrouponendTime").val();
  if (b && b != "0") {
    var e = b.split("-");
    if (e.length == 6) {
      var g = new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5]);
      var i = g.getTime();
      $("#grouponRemainTimeShow").val(i - f)
    }
  }
}

function getBendiLazy() {
  var a;
  if (currSiteType == 2 && siteFlag == 1) {
    a = "http://static.1mall.com/jipiao/life_mall_used_index.html"
  } else {
    a = "http://static.yihaodian.com/jipiao/life_mall_unused_index.html"
  }
  var b = "<iframe src=" + a + " width='210' height='156' frameborder='0' scrolling='no'></iframe>";
  jQuery("#bendi").html(b)
}

$(function() {
  homeCatPanel();
  rankTab();
  var a = $("#tsSlideList").find("img").size();
  if (isWidescreen) {
    tsSlide(790, a)
  } else {
    tsSlide(570, a)
  }
  scrollTop();
  jQuery("a[tk]").click(function() {
    var d = $(this), c = d.attr("tk");
    if (c) {
      addTrackPositionToCookie("1", c);
      d.removeAttr("tk")
    }
  });
  calLimitTime();
  var b = $("#curGrouponRemainTime").val();
  if (b) {
    grouponCountdownTime(b)
  }
  getBendiLazy();
  (function(e, g, f) {
    lazyLoadImageObjArry = lazyLoadImageObjArry || [];
    var d = jQuery("#mallIndex");
    if (d.length) {
      var c = d.children();
      c.each(function() {
        if (this.getAttribute("lazyImg") == "y") {
          lazyLoadImageObjArry.push(this.id)
        } else {
          jQuery(this).children().each(function() {
            if (this.getAttribute("lazyImg") == "y") {
              lazyLoadImageObjArry.push(this.id)
            }
          })
        }
      })
    }
    initImageLoad();
    jQuery.YHD.imgLoad.load()
  })(jQuery, window, document)
}); 