$(function() {

	 $(document).ready(function(){
           $(".owl-carousel").owlCarousel({
            items : 1,
            nav : true,
    				navText : ["",""],

           });
        });
 // слайдер
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
//Плавный переход по ссылкам

$(document).ready(function(){
        var HeaderTop = $('.top-header').offset().top;
        
        $(window).scroll(function(){
                if( $(window).scrollTop() > HeaderTop ) {
                        $('.top-header').css({position: 'fixed', top: '0px'}),
                        $('.top-header').addClass('fix-menu');
                } else {
                        $('.top-header').css({position: 'static'}),
                        $('.top-header').removeClass('fix-menu');
                }
        });
    });


var positions = [], //сюда сложим на загрузке страницы позиции наших "якорных" блоков, чтобы не считать их каждый раз. и сюда же положим ссылки на соответствующие a.scroll-to
    currentActive = null, //здесь будет храниться id текущего блока, чтобы не менять классы по 100 раз за одну прокрутку 
    links = $('.scroll-to'); //сохраним массив всех a.scroll-to

$(".anchor").each(function(){ //перебираем блоки, сохраняем позиции и ссылки на пункты меню
    positions.push({
        top: $(this).position().top - 100,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

//делаем реверс массива, чтобы при скролле перебирать его с конца и выходить из цикла при нахождении
//зачем нам проверять каждый блок, если прокрутка уже ниже последнего, верно?
positions = positions.reverse(); 

$(window).on('scroll',function() {
    var winTop = $(window).scrollTop();
    for(var i = 0; i < positions.length; i++){
        if(positions[i].top < winTop){ //если прокрутка страницы ниже нашего блока
            if(currentActive !== i){ //и если мы еще не добавили класс текущему блоку
                currentActive = i;
                links.filter('.active').removeClass('active'); //снимаем класс .active с текущего пункта меню
                positions[i].a.addClass("active");
            }
            break; //выходим из цикла, не нужно проверять блоки, которые выше
        }
    }
});
//Липкое меню

$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top-mnu").toggleClass("in");
});

$(".top-mnu>ul>li>a").on("click", function(e){
      $('.top-mnu').removeClass('in');
      $(".toggle-mnu").toggleClass("on");
    });

// Мобильное меню
});
