//ハンバーガーメニュー
function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-menu');
    var whiteBg = document.getElementById('js-white-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    whiteBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();


//背景
  const homeImages = [
    'images/home1.jpg',
    'images/home2.jpg',
    'images/home3.jpg',
    'images/home4.jpg',
    'images/home5.jpg',
    'images/home6.jpg',
    'images/home7.jpg',
    'images/home8.jpg',
    ];
    
    const home = document.querySelector('#home');
    
    let i = 0;
    // 背景画像を切り替える関数
    function change_main_vidual_background()
    {
        if(i === homeImages.length) {
          i = 0;
        };
        home.style.backgroundImage = 'url(' + homeImages[i] + ')';
        i++;
    }
    
    // インターバルで切り替える
    window.setInterval(change_main_vidual_background, 5000);


//#works
$(function(){
    $('.inview-balloon').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
        // 要素が表示されたらクラスを追加
        $(this).stop().addClass('balloon');
        }
    });
});


//page top
 //スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){//上から200pxスクロールしたら
      $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
      $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
    }else{
      if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
        $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
        $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
      }
    }
  }
  // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // #page-topをクリックした際の設定
  $('#page-top a').click(function () {
      $('body,html').animate({
          scrollTop: 0//ページトップまでスクロール
      }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
      return false;//リンク自体の無効化
  });
  
