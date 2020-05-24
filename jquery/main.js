$(document).ready(function(){
    $('section.foodlist div.wrap ul li').click(function(){
        $('section.foodlist div.wrap ul li > div').addClass('foodList_overlay');
        $('section.foodlist div > span').addClass('opcity_1');
    });
    $('section.foodlist div.foodlist_wrap span').click(function(){
        $('section.foodlist div.wrap ul li > div').removeClass('foodList_overlay');
        $('section.foodlist div > span').removeClass('opcity_1');
    });
    
    $('section.foodCategory span').click(function(){
        if($('section.foodCategory div').hasClass('minusCategory')){
            $('section.foodCategory div').removeClass('minusCategory');
            $('section.foodCategory div').addClass('plusCategory');
        }else{
            $('section.foodCategory div').removeClass('plusCategory');
            $('section.foodCategory div').addClass('minusCategory');
        }
    });

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
    });

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
    /*chef 카드 열기 */
    $(document).scroll(function(){
        console.log($(document).scrollTop());
        console.log($('section.introduce').offset().top); 

        var maxScollValue =$(document).height() - $(window).height();
        var scrollPer = $(document).scrollTop() / maxScollValue;
        $('.progressBar div').css('width', (scrollPer * 100) + '%'); //맨위의 스크롤바
    })

    $('header div.slider').bxSlider({
        randomStart : true,
        auto : true,
        speed : 1000,
        pause: 2500,
        controls: false, // 이전 다음 버튼 노출 여부
        pager : false, //페이지 표시
        adaptiveHeight:true
    });
});
