$(document).ready(function(){
    $('section.foodlist div.wrap ul li').click(function(){
        $('section.foodlist div.wrap ul li > div').addClass('foodList_overlay');
        $('section.foodlist div > span').addClass('opcity_1');
    });
    $('section.foodlist div.foodlist_wrap span').click(function(){
        $('section.foodlist div.wrap ul li > div').removeClass('foodList_overlay');
        $('section.foodlist div > span').removeClass('opcity_1');
    });//what people say  open /close
    
    $('section.foodCategory span').click(function(){
        if($('section.foodCategory div').hasClass('minusCategory')){
            $('section.foodCategory div').removeClass('minusCategory');
            $('section.foodCategory div').addClass('plusCategory');
        }else{
            $('section.foodCategory div').removeClass('plusCategory');
            $('section.foodCategory div').addClass('minusCategory');
        }
    }); //top10 open /close

    $('section.foodCategory span:first-of-type').click(function(){
        $(this).addClass('nonSpan');
        $('section.foodCategory span:last-of-type').removeClass('nonSpan');
    });
    $('section.foodCategory span:last-of-type').click(function(){
        $('section.foodCategory span:first-of-type').removeClass('nonSpan');
        $(this).addClass('nonSpan');
    });//더보기

    $('section.map div div').click(function(){
        if($('section.map div iframe').hasClass('map_open')){
            $('section.map div iframe').removeClass('map_open');
            $('section.map div div h2:nth-of-type(1)').removeClass('text_delete');
            $('section.map div div h2:nth-of-type(2)').addClass('text_delete');
        }else{
            $('section.map div iframe').addClass('map_open'); 
            $('section.map div div h2:nth-of-type(1)').addClass('text_delete');
            $('section.map div div h2:nth-of-type(2)').removeClass('text_delete');
        }
    }); //지도 open close

    $('section.chef ul li:nth-of-type(1) div').click(function(){
        $('section.chef ul li div').removeClass('chef_introduce');
        $('section.chef ul li').removeClass('chef_margin_zero').removeClass('chef_margin');
        $('section.chef ul li:nth-of-type(1)').addClass('chef_margin');
        $('section.chef ul li:nth-of-type(2)').addClass('chef_margin_zero');
        $(this).addClass('chef_introduce');
    });
    $('section.chef ul li:nth-of-type(2) div').click(function(){
        $('section.chef ul li div').removeClass('chef_introduce').removeClass('chef_margin_zero').removeClass('chef_margin');
        $('section.chef ul li').removeClass('chef_margin_zero').removeClass('chef_margin');
        $('section.chef ul li:nth-of-type(1)').addClass('chef_margin_zero');
        $('section.chef ul li:nth-of-type(2)').addClass('chef_margin');
        $(this).addClass('chef_introduce');
    });
    $('section.chef ul li:nth-of-type(3) div').click(function(){
        $('section.chef ul li div').removeClass('chef_introduce').removeClass('chef_margin_zero').removeClass('chef_margin');//초기화
        $('section.chef ul li').removeClass('chef_margin_zero').removeClass('chef_margin'); //초기화
        $('section.chef ul li:nth-of-type(1)').addClass('chef_margin_zero');
        $('section.chef ul li:nth-of-type(2)').addClass('chef_margin_zero');
        $('section.chef ul li:nth-of-type(3)').addClass('chef_margin'); //margin으로 밀기
        $(this).addClass('chef_introduce');//카드 오픈
    });
    // $('section.chef ul li div').click(function(){
    //     if($('section.chef ul li div').hasClass('chef_introduce')){
    //         //$(this).removeClass('chef_introduce');
    //         alert('');
    //     }
    // });
    /*chef 카드 열기 */
    $('.arrow_top').click(function(){
        $('html, body').animate({scrollTop:0}, '500', 'swing');
    }) //맨위로 가기
    $(document).scroll(function(){    
        if($(document).scrollTop() > $('.foodCategory').offset().top-800){
            $('section.foodCategory > ul:first-of-type li').removeClass('positionType');
            $('section.foodCategory > ul:first-of-type li:nth-of-type(1)').addClass('scroll1');
            $('section.foodCategory > ul:first-of-type li:nth-of-type(2)').addClass('scroll2');
            $('section.foodCategory > ul:first-of-type li:nth-of-type(3)').addClass('scroll3');
            $('section.foodCategory > ul:first-of-type li:nth-of-type(4)').addClass('scroll4');
        }
        else if($(document).scrollTop() < $('.foodCategory').offset().top-800){
            $('section.foodCategory > ul:first-of-type li').addClass('positionType');
            $('section.foodCategory > ul:first-of-type li:nth-of-type(1)').removeClass('scroll1');
            $('section.foodCategory > ul:first-of-type li:nth-of-type(2)').removeClass('scroll2');
            $('section.foodCategory > ul:first-of-type li:nth-of-type(3)').removeClass('scroll3');
            $('section.foodCategory > ul:first-of-type li:nth-of-type(4)').removeClass('scroll4');
        }
        var maxScollValue =$(document).height() - $(window).height();
        var scrollPer = $(document).scrollTop() / maxScollValue;
        $('.progressBar div').css('width', (scrollPer * 100) + '%'); //맨위의 스크롤바
    })//scroll

    $('header div.slider').bxSlider({
        randomStart : true,
        auto : true,
        speed : 1000,
        pause: 2500,
        controls: false, // 이전 다음 버튼 노출 여부
        pager : false, //페이지 표시
        adaptiveHeight:true
    });//bx slider

    $('footer div.footer_top ul li i').mouseenter(function(){
        $(this).addClass('orange')
    });
    $('footer div.footer_top ul li i').mouseleave(function(){
        $(this).removeClass('orange')
    });
});
