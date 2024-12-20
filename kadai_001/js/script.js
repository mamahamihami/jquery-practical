// カルーセル
$('.main-img').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: true,
  fade: true,
  infinite: true,
  speed: 1600,
  awipe: false,
});

// リンクホバー
$(function () {
  $('header a').hover(
    function () {
      $(this).css('color', 'rgba(0, 0, 0, 0.5)'); // ホバー時に赤に変更
    },
    function () {
      $(this).css('color', ''); // ホバー解除時に元の色に戻す
    }
  );
});

// TOPボタン
$(function () {
  const $pageTop = $("#js-pagetop");

  // 初期状態では非表示
  $pageTop.hide();

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      if (!$pageTop.is(':visible')) {
        $pageTop.css('display', 'flex').hide().fadeIn(300); // フェードインで表示
      }
    } else {
      if ($pageTop.is(':visible')) {
        $pageTop.fadeOut(300); // フェードアウトで非表示
      }
    }
  });

  $pageTop.on('click', function (e) {
    e.preventDefault(); // クリックイベントのデフォルト動作を無効化
    $('html, body').animate(
      {
        scrollTop: 0, // ページの最上部へ
      },
      600, // アニメーション時間: 600ms
      'swing' // イージングの種類: 'swing'（滑らかな動き）
    );
  });
});

// nav ボタンスクロールなめらか
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 600;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});


// 各セクションのフェードイン
$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
      // ウィンドウの高さを取得
      const wHeight = $(window).height();
      // スクロールした量を取得
      const wScroll = $(window).scrollTop();
          // それぞれのidに対して…
          $(".about-fadein ,  .works-fadein").each(function () {
              // それぞれのidのウィンドウからの高さを取得
              const bPosition = $(this).offset().top;
              // スクロールした量が要素の高さを上回ったら
              // その数値にウィンドウの高さを引き、最後に200pxを足す
          if (wScroll > bPosition - wHeight + 200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});

//course-item modal

$(function() {
  $('.works_img a').click(function() { //works-img a　をクリックしたら
          var imgSrc = $(this).children().attr('src'); //クリックした画像の子要素(img)のsrc属性をimgSrcの変数に設定
          $('.bigimg').children().attr('src', imgSrc); //bigimg内の子要素(img)のsrc属性を、imgSrcに書き換える
          $('.modal').fadeIn(); //モーダルをfadeInで表示させたら
          $('body,html').css('overflow-y', 'hidden'); //画面の縦スクロールをさせないようにする
          return false //aタグの遷移を無効化
        });
  
  $('.close-btn').click(function() {  //course-btn　をクリックしたら
          $('.modal').fadeOut();    //モーダルが非表示になる
          $('body,html').css('overflow-y', 'visible'); //モーダルを表示した際に無効化していた縦スクロールを再度有効にする
          return false   //aタグの遷移を無効化
        });
  });