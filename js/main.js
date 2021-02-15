$(function(){
    /**
     * ハンバーガーメニュー
     */
    var openImage = 'img/sp/open.svg';
    var closeImage = 'img/sp/close.svg';

    $('#menuButton').on('click', function(){
        $('#menuButton').toggleClass('active');
        $('#nav').toggleClass('active');
    });

    /**
     * スライドショー
     */
    $('#slideContents').slick({
        // 自動再生
        autoplay: true,
        // 再生スピード
        autoplaySpeed: 2000, // ミリ秒
        // ページ遷移のスピード
        speed: 500,
        // ページ送りの表示
        dots: true,
        // マウスホバー時にスライドを止めない
        pauseOnHover: false,
        // ドット選択時にスライドを止めない
        pauseOnFocus: false,
        // フェード
        fade: true,
    });

    /**
     * ふわっと出現
     */
    // 要素の位置
    var workPosY = $('.work-block > section').offset().top - $(window).height();
    console.log('workPosY: ' + workPosY);

    $(window).on('scroll', function(){
        
        // スクロール位置
        var dy = $(this).scrollTop();
        console.log('スクロール位置: ' + dy);

        if(workPosY < dy)
        {
            $('.work-block > section').addClass('fade-in');
        }
    });
});