//*---------------------*
//*  ハンバーガーメニュー
//*---------------------*

$(function () {
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive')
  
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true')
      $('#js-global-menu').attr('area-hidden','false')
    } else {
      $(this).attr('aria-expanded', 'false')
      $('#js-global-menu').attr('area-hidden','true')
    }
  });

  $('#js-drawer-background, #js-global-menu a').click(function () {
    $('body').removeClass('is-drawerActive')
    $('#js-hamburger').attr('aria-expanded', 'false')
    $('#js-global-menu').attr('area-hidden','true')
  });
});


//*--------------------------*
//*  Swiper(自動＆手動スワイプ)
//*--------------------------*

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.6,
  centeredSlides : true,

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 2.6,
      spaceBetween: 70,
    },
    992: {
      slidesPerView: 3.8,
      spaceBetween: 56,
    },
    1367: {
      slidesPerView: 4.8,
      spaceBetween: 56,
    }

  }
});

$(function(){
  $("#acMenu dt").on("click", function() {
  $(this).next().slideToggle();
  });
});


//*---------------------*
//*  スムーズスクロール
//*---------------------*

$(function() {
  // a要素のhref属性が#だけのものを除外した、
  // href属性が#で始まるもののどれかをクリックした時、
  $("a[href^='#']:not([href='#'])").click(function() {

    // クリックしたa要素のhref属性を取得し(例:#contactなど)、
    // そのコンテンツからtopまでの距離を変数targetに代入
    let target = $($(this).attr('href')).offset().top;


    // 変数targetの位置からヘッダー分(94px)を減らして再代入
    target -= 94;

    // コンテンツからtopまでの移動を
    $('html,body').animate({scrollTop: target}, 500);
    return false;
  });
});

//*---------------------*
//*  フォーム
//*---------------------*

$(function () {
  // const $submitBtn = $('#js-submit')

  // 全てのアラートを消す
  $(".alert").hide();

  // #submitBtnをクリックした時
  $("#submitBtn").click(function() {
    // 変数sendFlagにtureを代入
    let sendFlag = true;

    // もし、#nameのvalue属性の値を取得して何もなかったら、
    if(!$("#name").val()) {

      // #nameSectionのalretを表示する
      $("#nameSection .alert").show();
      // 変数sendFlagにfalseを再代入
      sendFlag = false;
      $('input[type="text"]').css('margin-top','5px');

      // #nameのvalue属性の値を取得して何かあったら、
    } else {
      // #nameSectionのalertを非表示にする
      $("#nameSection .alert").hide();
      $('input[type="text"]').css('margin-top','39px');
    }

    // メールアドレス
    if(!$("#mail").val()) {
      $("#mailSection .alert").show();
      sendFlag = false;
      $('input[type="email"]').css('margin-top','5px');

    } else {
      $("#mailSection .alert").hide();
      $('input[type="email"]').css('margin-top','39px');
    }

    // お問い合わせ内容
    if(!$("#contact-message").val()) {
      $("#textareaSection .alert").show();
      sendFlag = false;
      $('textarea').css('margin-top','5px');

    } else {
      $("#textareaSection .alert").hide();
      $('textarea').css('margin-top','39px');
    }

    // let contactAlert = $('#checkboxSection .contact__alert');
    // もし、チェックボックスにチェックがなかったら、
    if(!$("#privacyCheck").prop('checked')) {
      // アラートをだす
      $("#checkboxSection .alert").show();

      // 変数sendFlagにfalseを再代入
      sendFlag = false;

      $("#checkboxSection .alert").css('margin-top','2px');
      $('input[type="submit"]').css('margin-top','8px');

      // そうじゃない場合、アラートを消す
    } else {
      $("#checkboxSection .alert").hide();
      $('input[type="submit"]').css('margin-top','30px');
    }

    // 変数sendFlagがfalseなら送信できない
    if(sendFlag == false) {
      return false;
    }
  });
});
