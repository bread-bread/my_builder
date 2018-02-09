export default () => {
    $('.sidebar__trigger').on('click', function(e){
        e.preventDefault();
        $('.sidebar').css(
            'width', '60%'
        );
        $('.sidebar').addClass('active');
    });
    $(document).on('click', function(e){
        var $this = $(e.target);
        if(!$this.closest('.sidebar').length && $('.sidebar').hasClass('active')) {
            $('.sidebar').css(
                'width', '0'
            );
            $('.sidebar').removeClass('active');
        }
    });

    // scroll
    $('.side-nav__link').on('click', function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 50,
            $this = $(this);
        $('html').animate({scrollTop: top}, 800, function(){
            $this.parent().addClass('side-nav__item_active').siblings().removeClass('side-nav__item_active');
        });
    });
    $(window).on('scroll', function(){
        if (window.innerWidth > 768 && $('#article_1').length) {
            var topScroll = $('#article_1').offset().top;
            ($(window).scrollTop() > topScroll) ? $('.sidebar').addClass('sidebar_fixed') : $('.sidebar').removeClass('sidebar_fixed');
        }
            var menu_selector = ".side-nav"; 
            var scroll_top = $(document).scrollTop();
            $(menu_selector + " .side-nav__item").each(function () {
                var hash = $(this).children().attr("href");
                var target = $(hash);
                if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                    $(menu_selector + " side-nav__item.side-nav__item_active").removeClass("side-nav__item_active");
                    $(this).addClass("side-nav__item_active");
                } else {
                    $(this).removeClass("side-nav__item_active");
                }
            });
    });
    ////////////////////////////////////////////////////////
    
    // var blog=document.querySelector('#blog');
    // var listTextBlock=blog.querySelectorAll('.text-block');
    // var menuBlog=document.querySelector('#menu-blog');

    // listTextBlock.forEach(function(item,i){ 
    // //Добавляем пункты меню для каждого текстового блока в блоге
    // item.id="text"+(i+1).toString();
    // var newLi=document.createElement('li');
    // newLi.id="menu-"+item.id;
    // newLi.innerText=item.querySelector('h3').innerText;  
    // // первый пункт активный
    // if (i==0) {
    //     newLi.classList.add('menu-blog-active');
    // }
    // menuBlog.appendChild(newLi);
    // });

    // //обработчик события прокрутки блога
    // blog.addEventListener('scroll', function(){
    // // по всем текстовым блокам блога
    //     listTextBlock.forEach(function(item, i){
    //     // начало оболасти активности блока
    //     var startActive=blog.scrollTop;
    //     // конец области активности блока
    //     var endActive=blog.scrollTop+100;
    //     //если верхняя граница текстового блока сверху в верхних 100px блога, то блок активный
    //         if (startActive <= item.offsetTop && endActive > item.offsetTop) {
    //         setActiveTextBlok(listTextBlock[i]);
    //     }
    // });
    // })

    // // назначаем активный класс для бока и его пункта меню
    // function setActiveTextBlok(curTextBlock) {
    // listTextBlock.forEach(function(item){
    //     if (item != curTextBlock){
    //     //удаляем активный класс у всех остальных текстовых блоков
    //     item.classList.remove('text-block-active');
    //     document.querySelector('#menu-'+item.id).classList.remove('menu-blog-active');
    //     }
    // });
    // //добавляем активный класс к текущему текстовому блоку
    // curTextBlock.classList.add('text-block-active');  
    // document.querySelector('#menu-'+curTextBlock.id).classList.add('menu-blog-active');
    // }
    //////////////////////////////////////////////////////////////////


    // var menu_selector = ".side-nav__list"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
    // function onScroll(){
    //     var scroll_top = $(document).scrollTop(),
    //         menuLink = $(menu_selector).find('a');
    //     $(menuLink).each(function(){
    //         var hash = $(this).attr("href");
    //         var target = $(hash);
    //         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
    //             $(menuLink).parent('.side-nav__item_active').removeClass('side-nav__item_active');
    //             $(this).parent().addClass('side-nav__item_active');
    //         } else {
    //             $(this).parent().removeClass('side-nav__item_active');
    //         }
    //     });
    // }

    // $(document).on('scroll', onScroll);
 
    // $("a[href^=#]").click(function(e){
    //     e.preventDefault();
 
    //     $(document).off("scroll");
    //     $(menu_selector + " a.active").removeClass("active");
    //     $(this).addClass("active");
    //     var hash = $(this).attr("href");
    //     var target = $(hash);
 
    //     $("html, body").animate({
    //         scrollTop: target.offset().top
    //     }, 500, function(){
    //         window.location.hash = hash;
    //         $(document).on("scroll", onScroll);
    //     });
 
    // });
}